import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from 'src/app/shared/services/navigation.service';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss'],
})
export class FormRegisterComponent implements OnInit {
  form!: FormGroup;

  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  @Output() onLogIn: EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private navigationService: NavigationService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  login() {
    this.onLogIn.emit(true);
  }

  send() {
    if (this.form.valid) {
      this.onSubmit.emit(this.form.value);

      this.userService.register(this.form.value).subscribe({
        next: () => {
          alert('Cadastro realizado com sucesso!');
          this.navigationService.navigate(['access', 'login']);
        },
        error: (err) => {
          let httpError = err as HttpErrorResponse;
          if (httpError.status == 400) {
            alert('Nome de usuário já cadastrado, tente outro.');
          } else {
            alert('Algo deu errado :(');
          }
        },
      });
    }
  }

  goToHome() {
    this.navigationService.navigate(['']);
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from 'src/app/shared/services/navigation.service';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
})
export class FormLoginComponent implements OnInit {
  form!: FormGroup;

  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  @Output() onSignUp: EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private navigationService: NavigationService,
    private authService: AuthService
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

  register() {
    this.onSignUp.emit(true);
  }

  send() {
    if (this.form.valid) {
      this.authService.login(this.form.value).subscribe({
        next: (res: any) => {
          localStorage.setItem('token', res.token);
          alert('Login realizado com sucesso!');
          this.navigationService.navigate(['']);
        },
        error: (err) => {
          alert('Usuário/Senha incorretos.');
        },
      });
    }
  }

  goToHome() {
    this.navigationService.navigate(['']);
  }
}

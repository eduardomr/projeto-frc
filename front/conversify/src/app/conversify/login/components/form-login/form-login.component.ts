import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from 'src/app/shared/services/navigation.service';

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
    private navigationService: NavigationService
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
      this.onSubmit.emit(this.form.value);
    }
  }

  goToHome() {
    this.navigationService.navigate(['']);
  }
}

import { Component, OnInit } from '@angular/core';

import { NavigationService } from '../../../../shared/services/navigation.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {}

  signup() {
    this.navigationService.navigate(['access', 'register']);
  }

  login() {}
}

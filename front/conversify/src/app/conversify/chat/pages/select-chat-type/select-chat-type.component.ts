import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';

import { UserService } from './../../../login/services/user.service';

@Component({
  selector: 'select-chat-type',
  templateUrl: './select-chat-type.component.html',
  styleUrls: ['./select-chat-type.component.scss'],
})
export class SelectChatTypeComponent implements OnInit {
  constructor(
    private navigationService: NavigationService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  getUser(navRoute: string) {
    this.userService
      .retrieve(localStorage.getItem('token') as string)
      .subscribe({
        next: () => {
          console.log('Usuário loggado');
          this.navigationService.navigate(['chat', navRoute]);
        },
        error: () => {
          alert('Realize o login para acessar o chat!');
          this.navigationService.navigate(['access', 'login']);
        },
      });
  }

  texto() {
    this.getUser('text');
  }

  video() {
    this.getUser('video');
  }

  ambos() {
    this.getUser('both');
  }
}

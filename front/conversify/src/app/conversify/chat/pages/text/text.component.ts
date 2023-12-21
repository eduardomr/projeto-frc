import { Component, OnInit } from '@angular/core';

import { MessageModel } from '../../models/message.model';
import { UserModel } from '../../models/user-details.model';
import { TextService } from '../../services/text.service';
import { UserService } from './../../../login/services/user.service';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {
  messageText: string = '';
  filter: any;
  chattingWith: UserModel = {} as UserModel;
  myUsername: string = '';
  instance: any;

  constructor(
    public textService: TextService,
    private userService: UserService,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.instance = this.textService.getInstance();
    this.getUser();
  }

  getMessages() {
    console.log(this.textService.messages);

    return this.textService.messages;
  }

  getUser() {
    this.userService
      .retrieve(localStorage.getItem('token') as string)
      .subscribe({
        next: (data) => {
          this.chattingWith = data as UserModel;
        },
        error: () => {
          alert('Erro ao recuperar usuário');
          this.navigationService.navigate(['access', 'login']);
        },
      });

    return;
  }

  sendMessage() {
    console.log(this.messageText);

    var message: MessageModel = {
      from: this.chattingWith.username,
      message: this.messageText,
      to: 'text',
      date: new Date(),
    };
    this.messageText = '';

    this.textService.sendMessage(message);
  }
}

import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

import { MessageModel } from '../models/message.model';
import { UserModel } from '../models/user-details.model';

@Injectable({
  providedIn: 'root',
})
export class TextService {
  user: UserModel = {} as UserModel;
  messages: MessageModel[] = [];
  instance: any;

  constructor(private socket: Socket) {
    this.instance = this.getMessage().subscribe((data) => {
      this.messages.push(data as MessageModel);
      console.log(data);
    });
  }

  getInstance() {
    return this.instance;
  }

  sendMessage(message: MessageModel) {
    console.log(this.messages);
    this.socket.emit('message', message);
  }

  getMessage() {
    return this.socket.fromEvent('message');
  }

  getUsers() {
    return this.socket.fromEvent('current_users');
  }
}

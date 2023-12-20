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

  constructor(private socket: Socket) {}

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

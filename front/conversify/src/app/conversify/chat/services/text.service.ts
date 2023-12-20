import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Subject } from 'rxjs';

import { Message } from '../models/message.model';
import { UserDetails } from '../models/user-details.model';

@Injectable({
  providedIn: 'root',
})
export class TextService {
  user: UserDetails = {} as UserDetails;
  messages: Message[] = [];
  chattingWith = new Subject<UserDetails>();

  constructor(private socket: Socket) {}

  sendMessage(message: Message) {
    //this.messages.push(message);
    console.log(this.messages);

    this.socket.emit('message', message);
    this.messages.push(message);
  }

  getMessage() {
    return this.socket.fromEvent('message');
  }

  getUsers() {
    return this.socket.fromEvent('current_users');
  }
}

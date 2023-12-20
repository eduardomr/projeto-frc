import { Component, OnInit } from '@angular/core';
import { TextService } from './text.service';
import { UserDetails } from '../../models/user-details.model';
import { Message } from '../../models/message.model';

@Component({
  selector: 'text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  messageText: string = '';
  filter: any;
  chattingWith: UserDetails = {} as UserDetails;
  myId: string = ''

  constructor(public chat: TextService) { }

  ngOnInit(): void {
    this.chat.getMessage().subscribe(data => {
      this.chat.messages.push(data as Message)
      console.log(data);
    })
    this.chat.chattingWith.subscribe(user => {
      this.chattingWith = user;
    });
    // this.chat.chattingWith.subscribe(user => {
    //   this.chattingWith = user
    //   this.filter = { $or: [{from: user.id},{to: user.id}]
    //   }
    // })
  }

  getMessages(){
    console.log(this.chat.messages);
    
    return this.chat.messages
  }

  sendMessage(){
    console.log(this.messageText);
    
    var message = {
      message: this.messageText,
      to: "text",
      date: new Date()
    }
    this.messageText = ''

    this.chat.sendMessage(message)
  }

}

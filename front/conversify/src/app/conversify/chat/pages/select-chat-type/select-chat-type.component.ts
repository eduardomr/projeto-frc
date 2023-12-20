import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
  selector: 'select-chat-type',
  templateUrl: './select-chat-type.component.html',
  styleUrls: ['./select-chat-type.component.scss'],
})
export class SelectChatTypeComponent implements OnInit {
  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {}

  texto() {
    console.log('texto');
    this.navigationService.navigate(['chat', 'text']);
  }

  video() {
    console.log('video');
  }

  ambos() {
    console.log('ambos');
  }
}

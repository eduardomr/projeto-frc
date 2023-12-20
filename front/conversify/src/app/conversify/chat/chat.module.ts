import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgArrayPipesModule } from 'ngx-pipes';

import { ChatRoutingModule } from './chat-routing.module';
import { SelectChatTypeComponent } from './pages/select-chat-type/select-chat-type.component';
import { TextComponent } from './pages/text/text.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BothComponent } from './pages/both/both.component';
import { VideoChatComponent } from './pages/video-chat/video-chat.component';

@NgModule({
  declarations: [
    TextComponent, 
    SelectChatTypeComponent, 
    BothComponent, 
    VideoChatComponent, 
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgArrayPipesModule,
    SharedModule,
  ],
})
export class ChatModule {}

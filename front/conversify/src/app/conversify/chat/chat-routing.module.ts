import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectChatTypeComponent } from './pages/select-chat-type/select-chat-type.component';
import { TextComponent } from './pages/text/text.component';
import { BothComponent } from './pages/both/both.component';
import { VideoChatComponent } from './pages/video-chat/video-chat.component';

const routes: Routes = [
  {
    path: '',
    component: SelectChatTypeComponent,
  },
  {
    path: 'text',
    component: TextComponent,
  },
  {
    path: 'video',
    component: VideoChatComponent,
  },
  {
    path: 'both',
    component: BothComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}

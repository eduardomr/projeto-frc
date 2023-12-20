import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectChatTypeComponent } from './pages/select-chat-type/select-chat-type.component';
import { TextComponent } from './pages/text/text.component';

const routes: Routes = [
  {
    path: '',
    component: SelectChatTypeComponent,
  },
  {
    path: 'text',
    component: TextComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}

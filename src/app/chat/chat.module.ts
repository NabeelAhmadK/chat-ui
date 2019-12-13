import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { ChatRoutingModule } from './chat.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  {  NgxEmojiPickerModule  }  from  'ngx-emoji-picker';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';

const MODULES = [
  CommonModule,
  ChatRoutingModule,
  NgbModule,
  FormsModule,
  ReactiveFormsModule,
  NgxEmojiPickerModule
]

@NgModule({
  declarations: [ChatPageComponent, ChatInboxComponent],
  imports: [
    ...MODULES
  ]
})
export class ChatModule { }

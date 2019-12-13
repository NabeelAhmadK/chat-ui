import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';
const routes: Routes = [
    {
        path: '',
        component: ChatInboxComponent
    },
    {
        path: 'chat',
        component: ChatPageComponent
    },
    {
        path: 'chat-inbox',
        component: ChatInboxComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChatRoutingModule { }

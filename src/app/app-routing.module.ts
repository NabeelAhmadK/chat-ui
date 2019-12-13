import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: "",
        loadChildren: "./chat/chat.module#ChatModule",
        data: { title: 'Carrier Management' }
      },
      {
        path: "chat-page",
        loadChildren: "./chat/chat.module#ChatModule",
        data: { title: 'Carrier Management' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

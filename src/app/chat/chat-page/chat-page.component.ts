import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {

  toggled: boolean = false;
  message: any = '';
  outgoingMessages: Array<any> = [];
  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    if (this.message) {
      this.outgoingMessages.push({
        message: this.message,
        time: new Date().toLocaleString()
      })
    }
    this.message = '';
  }

  handleSelection(event) {
    this.message += event.char;
  }



}

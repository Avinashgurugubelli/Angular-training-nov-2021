import { Message } from './../../models/message';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'message-list',
    templateUrl: 'message-list.component.html'
})

export class MessageListComponent implements OnInit {
    public messages: Message[] = [];
    constructor() { }

    ngOnInit() { }

    public addMsg() {
        this.messages.unshift({
            header: 'Greet',
            data: 'How are You?'
        })
    }

    public deleteMsgs() {
        this.messages = []
;    }
}
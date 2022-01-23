import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'subscriber',
    templateUrl: 'subscriber.component.html'
})

export class SubscriberComponent implements OnInit {

    public receivedMessage: string = ''

    constructor() { }

    ngOnInit() { }

    public msgReceiver(value: string) {
        this.receivedMessage = value;
    }

}
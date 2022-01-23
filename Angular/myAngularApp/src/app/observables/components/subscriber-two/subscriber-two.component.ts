import { EMPTY, Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message-service';

@Component({
    selector: 'subscriber-two',
    templateUrl: 'subscriber-two.component.html'
})

export class SubscriberTwoComponent implements OnInit {

    public receivedMessage: string = ''
    public receivedMessage$: Observable<string> = EMPTY;

    constructor(private msgService: MessageService) { }

    ngOnInit() {
        // Observable subscription
        this.msgService.message()
        .pipe(
            // To DO some side operations
            tap((value: string) => {
                console.log(value);
            })
        )
        .subscribe((value: string) => {
            this.receivedMessage = value;
        });

        this.receivedMessage$ = this.msgService.message();
     }
}
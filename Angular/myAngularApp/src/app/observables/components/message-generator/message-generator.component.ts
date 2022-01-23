import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessageService } from '../../services/message-service';

@Component({
    selector: 'message-generator',
    templateUrl: 'message-generator.component.html'
})

export class MessageGeneratorComponent implements OnInit {
    public message: string = '';

    constructor(private msgService: MessageService) { }

    ngOnInit() { }

    
    public sendMessage() {
        this.msgService.setMessage(this.message);
    }
}
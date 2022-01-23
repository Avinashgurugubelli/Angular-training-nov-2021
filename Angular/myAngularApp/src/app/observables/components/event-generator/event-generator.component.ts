import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'event-generator',
    templateUrl: 'event-generator.component.html'
})

export class EventGeneratorComponent implements OnInit {
    public message: string = '';
    @Output() public onMessage: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    ngOnInit() { }

    
    public sendMessage() {
        this.onMessage.emit(this.message);
    }
}
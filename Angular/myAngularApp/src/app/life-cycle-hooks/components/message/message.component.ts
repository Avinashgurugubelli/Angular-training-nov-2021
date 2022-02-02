import { Message } from './../../models/message';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, Input } from '@angular/core';

@Component({
    selector: 'message',
    templateUrl: 'message.component.html'
})

export class MessageComponent implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

    @Input() message: Message | null = null;


    constructor() {
        console.log(`constructor - data is ${this.message}`);
    }

    ngOnChanges() {
        console.log(`ngOnChanges - data is ${this.message}`);
      }

      ngOnInit() {
        console.log(`ngOnInit  - data is ${this.message}`);
      }

      ngDoCheck() {
        console.log("ngDoCheck")
      }

      ngAfterContentInit() {
        console.log("ngAfterContentInit");
      }

      ngAfterContentChecked() {
        console.log("ngAfterContentChecked");
      }

      ngAfterViewInit() {
        console.log("ngAfterViewInit");
      }

      ngAfterViewChecked() {
        console.log("ngAfterViewChecked");
      }

      ngOnDestroy() {
        console.log("ngOnDestroy");
      }
}

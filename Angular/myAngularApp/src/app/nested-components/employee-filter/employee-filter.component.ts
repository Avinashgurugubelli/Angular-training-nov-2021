import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'employee-filter',
    templateUrl: 'employee-filter.component.html'
})

export class EmployeeFilterComponent implements OnInit {

    @Input() public allEmployeeCount: number = NaN;
    @Input() public maleEmployeeCount: number = NaN;
    @Input() public femaleEmployeeCount: number = NaN;

    /**
     * The Output decorator makes the property an Output property
     * EventEmitter class is used to create the custom event When the button clicked,
     * the selected button value which is a string gets passed to the event handler method. Hence, the event payload is string.
     */
    @Output() public choice: EventEmitter<String> = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    public filterButtonClick(value:string) {
        this.choice.emit(value);
    }

}
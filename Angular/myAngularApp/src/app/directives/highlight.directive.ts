import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

    @Input() public color: string = 'red';

    constructor(private elementRef: ElementRef) {
        console.log('HighlightDirective');
        console.log(elementRef);
    }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.background = this.color;
    }
}
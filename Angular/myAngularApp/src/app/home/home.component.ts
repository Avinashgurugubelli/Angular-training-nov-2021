import { Component } from "@angular/core";

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent {

    public color: string = 'yellow';
    public buttonText = 'Click me'
    public name: string = 'Jack';
    public imagePath: string = '../../assets/images/image-1.jpg';
    public isDisabled: boolean = false;
    public imagePath2 = 'assets/images/image-2.webp';

    public isSpecial: boolean = false;
    public showText: boolean = false;

    public searchText: string = 'hello world';

    public details: {[key: string]: string | number} = {
        name: 'Martin',
        age: 35,
        emailId: 'jack@gmail.com'
    }


    public buttonClick(name: string) {
        alert(`Button clicked ${name}`);
        this.isSpecial = !this.isSpecial
    }

    public texboxKeyPress(event: any) {
        console.log(event.target?.value);
    }

    public updateModel(value: string) {
        this.searchText = value;
    }


    public ToggleNgClass() {
      this.isSpecial = !this.isSpecial;
    }

    public displayText() {
        this.showText = !this.showText;
    }
}

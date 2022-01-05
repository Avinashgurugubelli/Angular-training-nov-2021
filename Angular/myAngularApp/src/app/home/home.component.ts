import { Component } from "@angular/core";

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent {

    public name: string = 'Jack';
    public imagePath: string = '../../assets/images/image-1.jpg';
    public isDisabled: boolean = false;
    public imagePath2 = 'assets/images/image-2.webp'

    public details: {[key: string]: string | number} = {
        name: 'Martin',
        age: 35,
        emailId: 'jack@gmail.com'
    }

    // Property binding
}

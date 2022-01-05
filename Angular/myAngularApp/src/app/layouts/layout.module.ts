import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        NavBarComponent
    ],
    exports: [NavBarComponent],
    imports: [
        RouterModule
    ],
    providers: []
})
export class LayoutModule {

}
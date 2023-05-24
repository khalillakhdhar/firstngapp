import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutapp',
  templateUrl: './aboutapp.component.html',
  styleUrls: ['./aboutapp.component.css']
})
export class AboutappComponent {
  name: string = 'Khalil Lakhdhar';

    constructor() { } // constructor is a method that runs when the class is instantiated

    ngOnInit() {
    } // ngOnInit is a method that runs once the component is initialized

}

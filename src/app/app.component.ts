import { Component } from '@angular/core';

@Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
})
export class AppComponent {
        title: string;
        numberOne: Number;
        numberTwo: Number;
        isHappy: boolean;
        name: string;
        search: string;
        constructor() {
                this.title = 'Angular Lover';
                this.numberOne = 10;
                this.numberTwo = 20;
                this.isHappy = true;
                this.name = 'Suraj Negi';
                this.search = '';
        }
        change(event: any) {
                this.name = event.target.value;
        }

        changeName(name?: string) {
                this.name = name || 'Suraj';
        }

        handleChange(value: any) {
                this.search = value;
        }
}

import { Student } from './../../interfaces/student.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
        selector: 'app-student-details',
        templateUrl: './student-details.component.html',
        styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

        @Input()
        student: Student;

        @Output()
        click: EventEmitter<any> = new EventEmitter<any>();

        constructor() { }

        ngOnInit() { }

        clicked() {
                this.click.emit(this.student);
        }

}

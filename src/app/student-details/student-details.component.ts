import { Student } from './../interfaces/student.interface';
import { Component } from '@angular/core';


@Component({
        selector: 'app-student-details',
        templateUrl: './student-details.component.html',
        styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {
        students: Student[];
        constructor() {
                this.getStudentsData();
        }

        getStudentsData() {
                this.students = [
                        { name: 'Suraj Negi', isPresentToday: false, rollNumber: 1 },
                        { name: 'Rahul Sharma', isPresentToday: true, rollNumber: 2 },
                        { name: 'Salman Khan', isPresentToday: false, rollNumber: 3 },
                        { name: 'Arjun Rampal', isPresentToday: true, rollNumber: 4 },
                        { name: 'Raj Kundra', isPresentToday: false, rollNumber: 5 },
                        { name: 'Sourabh Gulati', isPresentToday: true, rollNumber: 6 },
                ]
        }

}

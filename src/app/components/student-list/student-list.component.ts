import { Router } from '@angular/router';
import { Student } from './../../interfaces/student.interface';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
        selector: 'app-student-list',
        templateUrl: './student-list.component.html',
        styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
        studentsList: Student[];
        constructor(
                private _router: Router,
                private _apiService: ApiService
        ) { }

        ngOnInit() {
                this.getStudentsData();
        }

        getStudentsData() {
                this._apiService.getStudentsDetails()
                        .subscribe((data) => {
                                this.studentsList = data;
                        }, (error) => {
                                console.log('error : ', error);
                        })
        }

        clicked(event: Student) {
                this._router.navigate(['/profile', event.rollNumber]);
        }
}

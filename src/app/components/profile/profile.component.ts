import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'app/services/api.service';
import { Student } from 'app/interfaces/student.interface';


@Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
        student: Student;
        constructor(
                private _location: Location,
                private route: ActivatedRoute,
                private _apiService: ApiService
        ) { }

        ngOnInit() {
                this.route.params.subscribe((params) => this.getStudentDetail(params));

                //this.route.paramMap.subscribe((params) => console.log('Param MAp : ', params));
        }

        getStudentDetail(params: any) {
                this._apiService.getStudentDetails(params.id)
                        .subscribe((data) => this.student = data);
        }
}

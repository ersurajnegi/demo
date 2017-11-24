import { Student } from './../interfaces/student.interface';
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {
        constructor(
                private _http: HttpClient
        ) { }

        public getStudentsDetails(): Observable<Student[]> {
                return this._http.get(`http://localhost:3000/studentDetails`)
                        .map((data: Student[]) => data)
                        .catch((e: HttpErrorResponse) => Observable.throw(e));
        }

        public getStudentDetails(id: number): Observable<any> {
                return this._http.get(`http://localhost:3000/${id}`)
                        .map((data: any) => data)
                        .catch((e: HttpErrorResponse) => Observable.throw(e));
        }
}

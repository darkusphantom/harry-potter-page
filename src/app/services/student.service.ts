import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environments';
import { Student } from '../interfaces/students.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private configUrl: string = environment.students_url;

  constructor(
    private http: HttpClient
  ) { }

  getStudents(): Observable<Student>{
    const students = this.http.get<Student>(this.configUrl);
    return students;
  }
}

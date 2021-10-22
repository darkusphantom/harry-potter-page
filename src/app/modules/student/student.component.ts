import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../interfaces/students.interface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  public filterStudents: string = '';
  public students: any = [];
  public page: number = 0;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent() {
    this.studentService.getStudents().subscribe((data: Student) => {
      this.students = data;
    });
  }

  prevPage(){
    if (this.page > 0)
      this.page -= 5;
  }

  nextPage(){
    this.page += 5;
  }

  onSearchStudents(search: string){
    this.page = 0;
    this.filterStudents = search;
  }
}

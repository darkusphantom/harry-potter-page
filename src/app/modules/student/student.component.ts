// Modulos de Angular
import { Component, OnInit } from '@angular/core';

// Servicios
import { StudentService } from '../../services/student.service';

// Interfaces
import { Student } from '../../interfaces/students.interface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html'
})
export class StudentComponent implements OnInit {
  // Atributos
  public filterStudents: string = '';
  public students: any = [];
  public page: number = 0;

  // Constructor
  constructor(private studentService: StudentService) { }

  // Metodos
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

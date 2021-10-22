// Modulos de Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { StudentComponent } from './student.component';
import { FilterStudentsPipe } from './pipes/filter-students.pipe';


@NgModule({
  declarations: [StudentComponent, FilterStudentsPipe],
  imports: [
    CommonModule
  ],
  exports: [StudentComponent]
})
export class StudentModule { }

// Mmodulos de Angular
import { Pipe, PipeTransform } from '@angular/core';

// Interfaces
import { Student } from 'src/app/interfaces/students.interface';

@Pipe({
  name: 'filterStudents'
})
export class FilterStudentsPipe implements PipeTransform {

  transform(students: Student[], page: number = 0, search :string = ''): Student[] {
    if(search.length === 0)
      return students.slice(page, page + 5);

    const filteredStudents = students.filter(student => student.house.toLowerCase().includes(search.toLowerCase()));
    return filteredStudents.slice(page, page + 5);
  }

}

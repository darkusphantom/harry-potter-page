// Modulos de Angular
import { Pipe, PipeTransform } from '@angular/core';

// Interfaces
import { Staff } from 'src/app/interfaces/staffs.interface';

@Pipe({
  name: 'filterStaffs'
})
export class FilterStaffsPipe implements PipeTransform {

  transform(Staffs: Staff[], page: number = 0, search :string = ''): Staff[] {
    if(search.length === 0)
    return Staffs.slice(page, page + 5);

    const filteredStaffs = Staffs.filter(Staff => Staff.house.toLowerCase().includes(search.toLowerCase()));
    return filteredStaffs.slice(page, page + 5);
  }

}

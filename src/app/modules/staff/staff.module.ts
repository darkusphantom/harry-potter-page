// Modulos de Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { StaffComponent } from './staff.component';
import { FilterStaffsPipe } from './pipes/filter-staffs.pipe';

@NgModule({
  declarations: [StaffComponent, FilterStaffsPipe],
  imports: [
    CommonModule
  ],
  exports: [StaffComponent]
})
export class StaffModule { }

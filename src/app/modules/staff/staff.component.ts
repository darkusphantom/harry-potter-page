// Modulos de Angular
import { Component, OnInit } from '@angular/core';

// Servicios
import { StaffService } from '../../services/staff.service';

// Interfaces
import { Staff } from '../../interfaces/staffs.interface';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html'
})
export class StaffComponent implements OnInit {
  // Atributos
  public filterStaffs: string = '';
  staffs: any = [];
  public page: number = 0;

  // Constructor
  constructor(private staffService: StaffService) { }

  // Metodos
  ngOnInit(): void {
    this.getStaff();
  }

  getStaff() {
    this.staffService.getStaffs().subscribe((data: Staff) => {
      this.staffs= data;
    });
  }

  prevPage(){
    if (this.page > 0)
      this.page -= 5;
  }


  nextPage(){
    this.page += 5;
  }

  onSearchStaffs(search: string){
    this.page = 0;
    this.filterStaffs = search;
  }
}

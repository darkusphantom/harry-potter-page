import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../services/staff.service';
import { Staff } from '../../interfaces/staffs.interface';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  public filterStaffs: string = '';
  staffs: any = [];
  public page: number = 0;

  constructor(private staffService: StaffService) { }

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

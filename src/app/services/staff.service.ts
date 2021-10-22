import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environments';
import { Staff } from '../interfaces/staffs.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StaffService {
  private configUrl = environment.starff_url;
  constructor(
    private http: HttpClient
  ) { }

  getStaffs(): Observable<Staff>{
    const staffs = this.http.get<Staff>(this.configUrl);
    return staffs;
  }
}

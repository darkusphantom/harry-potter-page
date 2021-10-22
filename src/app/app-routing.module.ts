import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { StaffComponent } from './modules/staff/staff.component';
import { StudentComponent } from './modules/student/student.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'staffs',
    component: StaffComponent
  },
  {
    path: 'students',
    component: StudentComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

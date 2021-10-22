// Modulos de Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }

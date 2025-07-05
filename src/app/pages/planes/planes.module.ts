import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlanesComponent } from './planes.component';

@NgModule({
  declarations: [PlanesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PlanesComponent }])
  ]
})
export class PlanesModule { }

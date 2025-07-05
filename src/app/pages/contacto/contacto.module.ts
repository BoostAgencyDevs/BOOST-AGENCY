import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto.component';

@NgModule({
  declarations: [ContactoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ContactoComponent }])
  ]
})
export class ContactoModule { }

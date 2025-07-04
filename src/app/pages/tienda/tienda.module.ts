import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TiendaComponent } from './tienda.component';

@NgModule({
  declarations: [TiendaComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TiendaComponent }])
  ]
})
export class TiendaModule { }

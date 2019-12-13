import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonTextfieldComponent } from './common-textfield/common-textfield.component';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app//modules/material/material.module';
@NgModule({
  declarations: [CommonTextfieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ],
  exports : [
  	CommonTextfieldComponent,
  	ReactiveFormsModule,
  	FormsModule
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 
import { MatTableModule } from '@angular/material/table'; 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  exports : [
  	MatTabsModule,
  	MatFormFieldModule,
  	MatInputModule,
  	MatTableModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }

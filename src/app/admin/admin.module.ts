import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { EditdeleteComponent } from './editdelete/editdelete.component';


@NgModule({
  declarations: [
    DeleteComponent,
    EditComponent,
    EditdeleteComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

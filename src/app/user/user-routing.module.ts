import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { AddviewComponent } from './addview/addview.component';
import { ViewuserComponent } from './viewuser/viewuser.component';

const routes: Routes = [
  {
    path: '', component:AddviewComponent
  },
  
  {
    path: 'adduser', component:AdduserComponent
  },
  {
    path: 'viewuser', component:ViewuserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

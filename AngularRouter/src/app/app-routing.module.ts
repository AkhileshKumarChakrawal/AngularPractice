import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from './student/student.component'
import {StudentdetailsComponent} from './studentdetails/studentdetails.component';
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {ElectronicComponent} from "./electronic/electronic.component";
import {LaptopComponent} from "./laptop/laptop.component";
import {FormsubComponent} from "./formsub/formsub.component";
import {UserComponent} from "./user/user.component";

const routes: Routes = [
  {path : '', redirectTo : 'HomePage', pathMatch : 'full'},
  {
    path : 'std' ,component: StudentComponent,
    children : [
      {
        path : 'stdDetail' ,component : StudentdetailsComponent
      },
      {
        path : 'stdDetail/:id' , component : StudentdetailsComponent
      }
    ]
  },
  {
    path : 'electronic',component : ElectronicComponent, children :[

      {
        path : 'laptop' , component : LaptopComponent
      }

    ]
  },
  {
    path : 'user' , component : UserComponent
  },
  {
    path : '**', component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

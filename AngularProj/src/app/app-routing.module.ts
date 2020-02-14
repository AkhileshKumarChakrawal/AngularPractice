import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentsComponent} from "./students/students.component";
import {StudentDetailComponent} from "./student-detail/student-detail.component";
import {EditStudentComponent} from "./edit-student/edit-student.component";


const routes: Routes = [
  {
    path : 'students' , component : StudentsComponent
  },

  {
    path : 'students/:id' , component : StudentDetailComponent,
  },
  {
    path : 'student/:id' , component : EditStudentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

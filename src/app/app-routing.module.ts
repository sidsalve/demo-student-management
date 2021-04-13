import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditStudentComponent } from './components/add-edit-student/add-edit-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'student' },
  { path: 'student', component: AddEditStudentComponent },
  { path: 'student/:index', component: AddEditStudentComponent },
  { path: 'students', component: ListStudentComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

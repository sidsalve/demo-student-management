import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';
import { AddEditStudentComponent } from './components/add-edit-student/add-edit-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { DateFormatterPipe } from './util/date-formatter.pipe';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEditStudentComponent,
    ListStudentComponent,
    DeleteDialogComponent,
    DateFormatterPipe,
    PageNotFoundComponent
  ],
  entryComponents: [DeleteDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

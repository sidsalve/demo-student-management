import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { Student } from 'src/app/util/interface';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';






@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})

export class ListStudentComponent implements OnInit {
  ELEMENT_DATA: Student[] = this.common.getAllStudents();
  displayedColumns: string[] = ['fullName', 'gender', 'dob', 'email', 'contact', 'action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private common: CommonService,
    private dialog: MatDialog,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.dataSource.sort = this.sort;

  }

  navigateToEdit(index) {

    this.router.navigate(['student', index]);
  }

  deleteStudent(index) {

    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      height: '130px',
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.common.deleteStudent(index, this.ELEMENT_DATA);
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource._updateChangeSubscription();

        this.common.openSnackBar('Student deleted Successfully!');
      }

    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent implements OnInit {

  studentForm: FormGroup;
  isEdit = false;
  editIndex = null;
  constructor(
    private fb: FormBuilder,
    private common: CommonService,
    private router: Router,
    private acRoute: ActivatedRoute
  ) {

    this.studentForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)]],
      contact: ['', [Validators.required]],
    });

    this.acRoute.params.subscribe(result => {
      if (result.index) {
        const index = +result.index;
        this.editIndex = index;
        const data = this.common.getStudentByIndex(index);
        this.studentForm.patchValue(data);
        this.isEdit = true;
      }

    })
  }

  get formControl() {
    return this.studentForm.controls;
  }

  ngOnInit() {
  }

  submitForm() {

    if (this.studentForm.invalid) {
      return;
    }
    this.studentForm.value['fullName'] = this.capitalizeFirstLetter(this.studentForm.value.firstName) + ' ' + this.capitalizeFirstLetter(this.studentForm.value.lastName);
    if (!this.isEdit) {
      this.common.AddNewStudent(this.studentForm.value);
      this.common.openSnackBar('Student added Successfully!');
    } else {
      this.common.editStudent(this.editIndex, this.studentForm.value);
      this.common.openSnackBar('Student updated Successfully!');

    }
    this.router.navigate(['students']);
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}

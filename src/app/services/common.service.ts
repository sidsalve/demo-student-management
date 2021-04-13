import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Student } from '../util/interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  updateLocalStorage(students: Student[] = []) {
    try {
      localStorage.removeItem('students');
      localStorage.setItem('students', JSON.stringify(students));
    } catch (error) {
      console.log('error', error);
    }

  }

  getAllStudents(): Array<Student> {
    const data = localStorage.getItem('students');
    if (data) {
      return JSON.parse(data);
    }
    return [];

  }

  getStudentByIndex(index: number): Student {
    const allStudents = this.getAllStudents();
    if (allStudents.length > 0) {
      return allStudents[index];
    }
    return {} as Student;
  }

  AddNewStudent(student: Student) {
    const allStudents = this.getAllStudents();
    allStudents.push(student);
    this.updateLocalStorage(allStudents);
  }

  editStudent(index: number, student: Student) {
    const allStudents = this.getAllStudents();
    allStudents[index] = student;
    this.updateLocalStorage(allStudents);
  }

  deleteStudent(index: number, studentList) {
    studentList.splice(index, 1);
    this.updateLocalStorage(studentList);
  }

  openSnackBar(message: string, action: string = "Close") {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}

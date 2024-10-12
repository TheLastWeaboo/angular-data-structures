import { Injectable } from '@angular/core';
import StudentList from '../../data/student-list';
@Injectable({
  providedIn: 'root'
})
export class StudentListService {
private student: StudentList[]=[];

    addStudent(id: string, name: string, grade: string, age: number):void
    {this.student.push({
      id:id,
      name:name,
      grade:grade,
      age:age
    });
}
    getStudent():StudentList[]{
      return this.student;
    }
  constructor() { }
}
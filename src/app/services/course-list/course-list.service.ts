import { Injectable } from '@angular/core';
import CourseList from '../../data/course-list';
@Injectable({
  providedIn: 'root'
})
export class CourseListService {
private course: CourseList[]=[];

addCourse(id: string, name: string):void{this.course.push({
  id:id,
  name:name,
});
}
  getCourse():CourseList[]{
    return this.course;
  }
  constructor() { }
}
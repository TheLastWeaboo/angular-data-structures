import { Component } from '@angular/core';
import { CourseListService } from '../services/course-list/course-list.service';
import CourseList from '../data/course-list';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  CourseList=[] as CourseList [];
	constructor(private courseService: CourseListService){
		this.CourseList=this.courseService.getCourse();
	}
	id: string = '';
	name: string = '';

	addCourse(): void {
		this.courseService.addCourse(
		this.id,
        this.name,
		);
    
		this.id = '';
		this.name = '';
	}
}
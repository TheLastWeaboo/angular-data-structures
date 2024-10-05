import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import StudentList from '../data/student-list';

@Component({
  selector: 'student-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  students: StudentList[] = [];
	id: string = '';
	name: string = '';
	grade: string = '';
	age: number = 0;

	addStudent(): void {
		this.students.push({
			id: this.id,
			name: this.name,
			grade: this.grade,
			age: this.age,
		});

		this.age = 0;
		this.grade = '';
		this.id = '';
		this.name = '';
	}
}
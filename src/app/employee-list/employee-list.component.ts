import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import EmployeeList from '../data/employee-list';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgForOf, FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employee: EmployeeList[] = [];
	id: string = '';
	name: string = '';
	position: string = '';
	age: number = 18;

	addEmployee(): void {
		this.employee.push({
			id: this.id,
			name: this.name,
			position: this.position,
			age: this.age,
		});

		this.age = 18;
		this.position = '';
		this.id = '';
		this.name = '';
	}
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
export class Variables {

  firstName:string="Shreepad";
  middleName:string="Nanasaheb";
  lastName:string="Yadav";

  fullName: string = `${this.firstName} ${this.middleName} ${this.lastName}`;


   // Student details variables
  name: string = "Rahul Sharma";
  contactNo: string = "9876543210";
  fatherName: string = "Arun Sharma";
  motherName: string = "Priya Sharma";
  studentClass: string = "10th";
  rollNo: number = 23;

}

import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-app',
  imports: [FormsModule,DatePipe],
  templateUrl: './employee-app.html',
  styleUrl: './employee-app.css',
})
export class EmployeeApp implements OnInit{

http=inject(HttpClient);

newEmpObj:Employee=new Employee();
empList=signal<any[]>([])

  ngOnInit(): void {
   this.getAllEmployess();
  }

 

  getAllEmployess(){
    this.http.get("https://api.freeprojectapi.com/api/EmployeeApp/GetEmployees").subscribe({
      next:(res:any)=>{
        this.empList.set(res)
      }
    })
  }

  onSave(){
     this.http.post("https://api.freeprojectapi.com/api/EmployeeApp/CreateEmployee",this.newEmpObj).subscribe({
      next:(res:any)=>{
        alert("Emplyee Added Successfully")
        this.getAllEmployess();
        this.newEmpObj = new Employee();
      }
    })
  }


  onEdit(data:any){
    this.newEmpObj=data;
  }

  onUpdate(){
     this.http.put("https://api.freeprojectapi.com/api/EmployeeApp/UpdateEmployee",this.newEmpObj).subscribe({
      next:(res:any)=>{
        alert("Emplyee Updated Successfully")
        this.getAllEmployess();
        this.newEmpObj = new Employee();
      }
    })
  }



  onDelete(id:number){
    this.http.delete("https://api.freeprojectapi.com/api/EmployeeApp/DeleteEmployee?id="+id).subscribe({
      next:(res:any)=>{
        alert("Emplyee Deleted Successfully")
        this.getAllEmployess()
      },
      error:(error:any)=>{
        alert(error.error.message)
      }
    })
  }

}

 class Employee {
  employeeId: number;
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  dateOfJoining: string; // ISO string
  departmentId: number;
  designationId: number;
  employeeType: string;
  salary: number;

  constructor(){
    this.employeeId=0;
    this.fullName="";
    this.email="";
    this.phone="";
    this.gender="";
    this.dateOfJoining="";
    this.departmentId=0;
    this.designationId=0;
    this.employeeType="";
    this.salary=0;
  }
}






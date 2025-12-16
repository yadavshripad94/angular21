import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fees-tracking',
  imports: [FormsModule],
  templateUrl: './fees-tracking.html',
  styleUrl: './fees-tracking.css',
})
export class FeesTracking implements OnInit {

  http=inject(HttpClient)

feesEnrollmentList=signal<any[]>([]);

newFesssObj:any={
    enrollmentId:0,
    studentName: "",
    contactNo: "",
    totalFees:0 ,
    status: "",
    batchName: "",
}

ngOnInit(): void {
    this.getAllFeesEnrollments();
  }

  getAllFeesEnrollments(){
    this.http.get("https://api.freeprojectapi.com/api/FeesTracking/getAllEnrollments").subscribe({
      next:(res:any)=>{
        this.feesEnrollmentList.set(res);
      }
    })
  }

  saveNewEnrollmen(){
    this.http.post("https://api.freeprojectapi.com/api/FeesTracking/addNewEnrollment",this.newFesssObj).subscribe({
      next:(res:any)=>{
        alert("New Record Added")
        this.getAllFeesEnrollments();
      }
    })
  }

  onEdit(data:any)
  {
    this.newFesssObj=data;
   }

    onUpdate(){
      this.http.post('https://api.freeprojectapi.com/api/FeesTracking/updateEnrollment?id=' +this.newFesssObj.enrollmentId,this.newFesssObj).subscribe({
        next:(res:any)=>{
          alert("Record are Updated Successfully")
          this.getAllFeesEnrollments();
        }
      })
    }



    onDelete(id:number){
      const isDelete = confirm("Are you sure want to delete?")
      if(isDelete){
        this.http.delete(
      "https://api.freeprojectapi.com/api/FeesTracking/DeleteById?id=" + id
    ).subscribe({
        next:(res:any)=>{
          this.getAllFeesEnrollments();
        }
      })
      }
      
    }

    resetData() {
  this.newFesssObj = {
    enrollmentId: 0,
    studentName: "",
    contactNo: "",
    totalFees: 0,
    status: "",
    batchName: "",
  };
}

  
    

}

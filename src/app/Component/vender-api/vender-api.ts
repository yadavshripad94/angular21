import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vender-api',
  imports: [FormsModule],
  templateUrl: './vender-api.html',
  styleUrl: './vender-api.css',
})
export class VenderApi implements OnInit {

  http=inject(HttpClient)

  newVendoreObj:any={
    vendorId: 0,
    vendorName: "",
    contactNo: "",
    emailId: "",
  }


  vendorList=signal<any[]>([])

  ngOnInit(): void {
    this.getAllVendors();
  }

  getAllVendors(){
    this.http.get("https://api.freeprojectapi.com/api/BusBooking/GetBusVendors").subscribe({
      next:(res:any)=>{
        this.vendorList.set(res);
      }
    })
  }

  saveNewVendore(){
    this.http.post("https://api.freeprojectapi.com/api/BusBooking/PostBusVendor",this.newVendoreObj).subscribe({
      next:(res:any)=>{
        alert("Vendore are created")
        this.getAllVendors();
      },
      error:(error:any)=>{

      }
    })
  }

  onEdit(data:any){
    this.newVendoreObj=data;
  }

  onUpdate(){
    this.http.put('https://api.freeprojectapi.com/api/BusBooking/PutBusVendors?id=' + this.newVendoreObj.vendorId,this.newVendoreObj).subscribe({
      next:(res:any)=>{
        alert("Vendor details are updated Successfully !")
        this.getAllVendors();
      }
    })

  }

  onDelete(id:number){
    const isDelete=confirm("Are you Sure Want To Delete ?")
    if(isDelete){
    this.http.delete("https://api.freeprojectapi.com/api/BusBooking/DeleteBusVendor?id="+id).subscribe({
      next:(result:any)=>{
        alert("vendor are Deleted Successfully !")
        this.getAllVendors();
      }
    })
    }
  
  }

}

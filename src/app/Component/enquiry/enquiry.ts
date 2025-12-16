import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enquiry',
  imports: [FormsModule],
  templateUrl: './enquiry.html',
  styleUrl: './enquiry.css',
})
export class Enquiry implements OnInit{

http=inject(HttpClient)

enquiryList=signal<any[]>([])
enquiryObj: any = {
    enquiryId: 0,
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    enquiryType: "",
    
  };

ngOnInit(): void {
  this.getAllEnquiries();
}

//for get all enqury
getAllEnquiries(){
  this.http.get("https://api.freeprojectapi.com/api/Enquiry/get-enquiries").subscribe({
    next:(res:any)=>{
      this.enquiryList.set(res.data);
    }
  })
}

//for add enqury

saveEnqury(){
  this.http.post('https://api.freeprojectapi.com/api/Enquiry/create-enquiry',this.enquiryObj).subscribe({
    next:(res:any)=>{
      alert("Enquiry Created Successfully !")
      this.getAllEnquiries();
    }
  })
}

//for edit
onEdit(data:any){
  this.enquiryObj=data
}

//for update
onUpdate(){
  debugger;
  this.http.put('https://api.freeprojectapi.com/api/Enquiry/update-enquiry?id='+this.enquiryObj.enquiryId,this.enquiryObj).subscribe({
    next:(res:any)=>{
      debugger;
      alert("Enqury Updated Successfully !")
      this.getAllEnquiries();
    }
  })
}

//for delete
onDelete(id:number){
  const isDelete="Are you sure want to Delete ?"
  if(isDelete){
      this.http.delete("https://api.freeprojectapi.com/api/Enquiry/delete-enquiry?id="+id).subscribe({
    next:(res:any)=>{
      alert("Enquiry Deleted Successfully")
      this.getAllEnquiries();
    }
  })
  }
}


}

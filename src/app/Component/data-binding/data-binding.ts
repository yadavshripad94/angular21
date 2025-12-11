import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
   course="Angular";
   courseDuration="3 Months"
  startDate="1 Dec"

  productName="Redmi 15 pro";
  myplceholder="Enter text"
  inputType="date";

  isActive:boolean=true;

  studentObj:any={
    studName:'Shreepad',
    Mobile:9988774455,
    email:'Shreepad@gmail.com'
  }


  showWelcome(){
    alert("Your Are Welcome ")
  }

  changeCourse(){
    this.course="Dot Net";
  }
  
  onCityChange(){
    alert("City Changed");
  }

setCourseName(courseName:string){
  this.course=courseName;
}



}

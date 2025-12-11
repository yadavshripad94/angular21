import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if-ex',
  imports: [NgIf,FormsModule],
  templateUrl: './ng-if-ex.html',
  styleUrl: './ng-if-ex.css',
})
export class NgIfEx {

  isDivisible:boolean=false;
  showDiv1(){
    this.isDivisible=true;
  }
  hideDiv1(){
    this.isDivisible=false;
  }

  toggleDiv1(){
    this.isDivisible=!this.isDivisible;
  }

  Num1:string='';
  Num2:string='';
  isActive:boolean=true;








}

import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-ex',
  imports: [NgFor],
  templateUrl: './ng-for-ex.html',
  styleUrl: './ng-for-ex.css',
})
export class NgForEx {

  cityList:string[]=["Pune","Mumbai","Nagpur","Solapur"];

  rollNoList:number[]=[101,102,103,104,105,106]

  studentList:any[]=[
    {name:'AAA',city:'Nagpur',isActive:true},
    {name:'BBB',city:'Pune',isActive:false},
    {name:'CCC',city:'Mumbai',isActive:true},
    {name:'DDD',city:'Solapur',isActive:false},
    {name:'EEE',city:'Nashik',isActive:true}

  ]

}

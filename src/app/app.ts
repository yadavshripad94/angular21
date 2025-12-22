import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Variables } from './Component/variables/variables';
import { DataBinding } from './Component/data-binding/data-binding';
import { NgIfEx } from './Component/ng-if-ex/ng-if-ex';
import { NgForEx } from './Component/ng-for-ex/ng-for-ex';
import { VenderApi } from './Component/vender-api/vender-api';
import { FeesTracking } from './fees-tracking/fees-tracking';
import { EmployeeApp } from './Component/employee-app/employee-app';

@Component({
  selector: 'app-root',
  imports: [Variables,DataBinding,NgIfEx,NgForEx,VenderApi,FeesTracking,RouterOutlet,RouterLink,RouterLinkActive,
    EmployeeApp
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo');
}

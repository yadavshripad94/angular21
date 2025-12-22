import { Routes } from '@angular/router';
import { DataTypes } from './Component/data-types/data-types';
import { NgForEx } from './Component/ng-for-ex/ng-for-ex';
import { NgIfEx } from './Component/ng-if-ex/ng-if-ex';
import { Variables } from './Component/variables/variables';
import { VenderApi } from './Component/vender-api/vender-api';
import { FeesTracking } from './fees-tracking/fees-tracking';
import { Enquiry } from './Component/enquiry/enquiry';
import { EmployeeApp } from './Component/employee-app/employee-app';

export const routes: Routes = [

{ path: 'data-types', component: DataTypes },
{ path: 'ng-for-ex', component: NgForEx},
{ path: 'ng-ifiex', component: NgIfEx },
{ path: 'variables', component: Variables },
{ path: 'vender-api', component: VenderApi },
{ path: 'fees-tracking', component: FeesTracking },
{ path: 'enquiry', component: Enquiry },
{ path: 'employee-app', component: EmployeeApp },


];

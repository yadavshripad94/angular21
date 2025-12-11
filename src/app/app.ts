import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Variables } from './Component/variables/variables';
import { DataBinding } from './Component/data-binding/data-binding';
import { NgIfEx } from './Component/ng-if-ex/ng-if-ex';
import { NgForEx } from './Component/ng-for-ex/ng-for-ex';

@Component({
  selector: 'app-root',
  imports: [Variables,DataBinding,NgIfEx,NgForEx],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo');
}

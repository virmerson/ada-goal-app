import { Component, Input } from '@angular/core';
import { GoalComponent } from '../goal/goal.component';
import { Goal } from '../goal';

@Component({
  selector: 'app-home',
  imports: [GoalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() message= "";
  goalList: Goal[] = [
    {id:1, description:'Study AngularJS', hours: 20} ,
    {id:2, description:'Study ReactJS', hours: 30},
    {id:3, description:'Study VueJS', hours: 40}
  ];
}

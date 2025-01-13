import { Component, Input } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  imports: [],
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.css'
})
export class GoalComponent {
  @Input() goal!:Goal;  //non-null assertion operator
}

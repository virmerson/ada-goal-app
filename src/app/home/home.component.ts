import { Component, Input } from '@angular/core';
import { GoalComponent } from '../goal/goal.component';
import { Goal } from '../goal';
import { CommonModule } from '@angular/common';
import { GoalService } from '../goal.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, GoalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() message= "";
  goalList: Goal[] = [];

  constructor(private goalService:GoalService){
    goalService.getAllGoals().then( (goalList)=>{
        this.goalList =goalList;
    } )
  }
}

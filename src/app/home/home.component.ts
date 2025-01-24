import { Component, Input } from '@angular/core';
import { GoalComponent } from '../goal/goal.component';
import { Goal } from '../goal';
import { CommonModule } from '@angular/common';
import { GoalService } from '../goal.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-home',
  imports: [CommonModule, GoalComponent, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() message = "";
  goalList: Goal[] = [];
  filteredGoalList: Goal[] = []

  constructor(private goalService: GoalService) {
    goalService.getAllGoals().then((goalList) => {
      this.goalList = goalList;
      this.filteredGoalList = goalList;
    })
  }

  onGoalDeleted(goalId: string) {
    this.goalList = this.goalList.filter((goal) => goal.id != goalId)
    this.filteredGoalList = this.filteredGoalList.filter((goal) => goal.id != goalId)
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredGoalList = this.goalList;
    } else {
      this.filteredGoalList = this.goalList.filter(
        (goal) => {
          let goalDescription = goal.description.toLocaleLowerCase();
          let textInput = text.toLocaleLowerCase();
          let result = goalDescription.includes(textInput)
          console.log(`${result} goalDescription: ${goalDescription} textInput: ${textInput}`)
          return result;
        })
    }
  }
}

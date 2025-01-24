import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';
import { RouterModule, Router } from '@angular/router';
import { GoalService } from '../goal.service';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-goal',
  imports: [RouterModule, MatCardModule, MatIconModule],
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.css'
})
export class GoalComponent {
  @Input() goal!: Goal;  //non-null assertion operator
  @Output() goalDeleted = new EventEmitter<string>();
  constructor(private router: Router, private goalService: GoalService) {

  }

  seeDetails() {
    console.log('Calling by method!')
    this.router.navigate(['details', this.goal.id])
  }

  deleteGoal() {
    if (this.goal.id) {
      this.goalService.delete(this.goal.id).then(() => {
        this.goalDeleted.emit(this.goal.id)
      })
    }
  }
  editGoal(){
    this
    .router
    .navigate(['edit-goal', this.goal.id])
  }
}

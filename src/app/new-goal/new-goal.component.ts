import { Component, inject } from '@angular/core';
import { GoalService } from '../goal.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-new-goal',
  imports: [ReactiveFormsModule],
  templateUrl: './new-goal.component.html',
  styleUrl: './new-goal.component.css'
})
export class NewGoalComponent {
  goalService: GoalService =  inject(GoalService);
  notification: string | null = null;

  newGoalForm = new FormGroup({
    description: new FormControl(''),
    hours: new FormControl(0)
  })

  submitGoal(){
  
    const newGoal = {
      description : this.newGoalForm.value.description ??'',
      hours: this.newGoalForm.value.hours ?? 0
    }
    this.goalService.addGoal(newGoal).then(()=>{

      this.newGoalForm.reset();

      this.notification = 'Goal added successfully'

      setTimeout( ()=>{
        this.notification = null
      }, 3000)

    })

  }

}

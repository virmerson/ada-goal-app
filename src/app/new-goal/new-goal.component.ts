import { Component, inject } from '@angular/core';
import { GoalService } from '../goal.service';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-new-goal',
  imports: [ReactiveFormsModule, MatFormField, MatFormFieldModule, MatInputModule, MatButtonModule, MatLabel],
  templateUrl: './new-goal.component.html',
  styleUrls: ['./new-goal.component.css', '../../styles/form-styles.css']
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

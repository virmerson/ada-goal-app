import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoalService } from '../goal.service';
import { Goal } from '../goal';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-goal',
  imports: [ReactiveFormsModule, MatFormField, MatFormFieldModule, MatInputModule, MatButtonModule, MatLabel],
  templateUrl: './edit-goal.component.html',
  styleUrls: ['./edit-goal.component.css', '../../styles/form-styles.css']
})
export class EditGoalComponent {

  route:ActivatedRoute = inject(ActivatedRoute);
  goalService:GoalService = inject(GoalService);
  goal: Goal | undefined ;

  editGoalForm =  new FormGroup({
    description: new FormControl(''),
    hours: new FormControl(0)
  })

  constructor(){
    const goalId = this.route.snapshot.paramMap.get("id")
    if (goalId){
      this
      .goalService
      .getGoalById(goalId)
      .then((goal)=>{
          this.goal =  goal;
          this.editGoalForm.setValue({
            description:goal.description,
            hours:goal.hours
          })
      })
    }
  }

  submitUpdate(){
    if (this.goal){
        let updateGoal = {
          id:this.goal.id,
          description: this.editGoalForm.value.description ?? '',
          hours:this.editGoalForm.value.hours ?? 0
        }

        this.goalService.updateGoal(updateGoal).then(()=>{
          console.log(`Goal ${updateGoal.id} updated successfully!`)
        })
    }
  }

}

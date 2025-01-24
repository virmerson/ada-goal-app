import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoalService } from '../goal.service';
import { Goal } from '../goal';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-goal',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-goal.component.html',
  styleUrl: './edit-goal.component.css'
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

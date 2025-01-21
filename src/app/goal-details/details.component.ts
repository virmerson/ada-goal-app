import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Goal } from '../goal';
import { GoalService } from '../goal.service';
@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  private route:ActivatedRoute = inject(ActivatedRoute)
  goal : Goal | undefined

  constructor( private goalService: GoalService ){
    const goalId =   this.route.snapshot.paramMap.get("id")
    if (goalId){
      goalService.getGoalById(goalId).then((goal)=>{
        this.goal = goal;
      })
    }
  }

}

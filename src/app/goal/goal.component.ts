import { Component, Input } from '@angular/core';
import { Goal } from '../goal';
import { RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-goal',
  imports: [RouterModule],
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.css'
})
export class GoalComponent {
  @Input() goal!:Goal;  //non-null assertion operator

  constructor(private router:Router){

  }

  seeDetails(){
    console.log('Calling by method!')
    this.router.navigate(['details', this.goal.id])
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  goalList = [
    {id:1, description:'Study AngularJS', hours: 20} ,
    {id:2, description:'Study ReactJS', hours: 30},
    {id:3, description:'Study VueJS', hours: 40},
    {id:4, description:'Learn English', hours: 50},
    {id:5, description:'Learn more about Services', hours: 5},
  ]
  constructor() { }

  getAllGoals(){
    return this.goalList;
  }

  getGoalById(id:number){
    // Arrow function
    return this.goalList.find( (goal)=> goal.id ==id )
  }
}

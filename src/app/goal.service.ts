import { Injectable } from '@angular/core';
import { Goal } from './goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  goalList:Goal[] = []
  url = "http://localhost:3000/goals"
  constructor() { }

  async getAllGoals(): Promise<Goal[]>{
    const data =  await fetch(this.url);
    const json =   await data.json() ?? [];
    return json;
  }

 async getGoalById(id:string):Promise<Goal>{
    // Arrow function
    const data =  await fetch(`${this.url}/${id}`);
    const json =   await data.json() ?? {};
    return json;

  }

  async delete (id:string){
    await fetch (`${this.url}/${id}`, {method:'DELETE'})
  }

  async addGoal(newGoal:Goal){
    await fetch (
      `${this.url}`,
        {
          method:'POST',
          headers:{'Content-type':'application/json'},
          body:JSON.stringify(newGoal)
        }

      )
  }

  async updateGoal(goal:Goal){
    await fetch (`${this.url}/${goal.id}`, {
      method:'PUT',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(goal)
    })
  }

}

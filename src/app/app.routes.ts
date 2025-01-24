import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './goal-details/details.component';
import { NewGoalComponent } from './new-goal/new-goal.component';
import { EditGoalComponent } from './edit-goal/edit-goal.component';

export const routes: Routes = [

    {
      path:'',
      component: HomeComponent,
      title: 'Home Page'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Details Page'
    },
    {
      path:'new-goal',
      component:NewGoalComponent,
      title: 'Add new Goal'
    },
    {
      path: 'edit-goal/:id',
      component:EditGoalComponent,
      title: 'Edit Goal Page'
    }
];

import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[HomeComponent, UserComponent]
})
export class AppComponent {
  title = 'ada-goal-app';
  userName = "Zé da Silva";
  welcomeMessage= "Welcome again!"
}

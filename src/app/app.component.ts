import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterModule]
})
export class AppComponent {
  title = 'ada-goal-app';
  userName = "Zé da Silva";
  welcomeMessage= "Welcome again!"
}

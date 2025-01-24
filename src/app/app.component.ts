import { Component, HostListener, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterModule, MatSidenavModule, MatToolbarModule, MatListModule,MatIconModule, CommonModule]
})
export class AppComponent {
  title = 'ada-goal-app';
  userName = "Zé da Silva";
  welcomeMessage= "Welcome again!"

  isScreenSmall =false;

  // @ViewChild('sidenav') sidenav!:MatSidenav

  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    this.checkScreenSize()
  }

  checkScreenSize(){
    this.isScreenSmall = window.innerWidth<=600
    console.log('isScreenSmall='+this.isScreenSmall)
  }

  closeSidenav(){
    // if (this.isScreenSmall){
    //   this.sidenav.close();
    // }
  }
}


import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactiveGold: boolean = false;
   inactiveSilver: boolean = false;
   inactiveCopper: boolean = false;

   jokeButtonHeading: string = "Joke Buttons"
   inactiveFrustrate: boolean = false;
   location: string = "center";

   constructor() { }

   ngOnInit() { }

   changeAllButtons() {
      if (this.inactiveGold === true) {
         this.inactiveGold = !this.inactiveGold;
      }
      if (this.inactiveSilver === true) {
         this.inactiveSilver = !this.inactiveSilver;
      }
      if (this.inactiveCopper === true) {
         this.inactiveCopper = !this.inactiveCopper;
      }
   }

   shiftLocation(oldLocation: string) {
      while (this.location === oldLocation) {
         this.location = ['left', 'right', 'center'][Math.floor(Math.random()*3)];
      }
      return this.location;
   }

}

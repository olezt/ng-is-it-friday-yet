import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'friday',
  templateUrl: './friday.component.html',
  styleUrls: [ './friday.component.css' ]
})
    
export class FridayComponent implements OnInit {
  
  public isItFridayYet = "Not yet";
  public backgroundImage = "url('./src/assets/grumpy-cat.jpg')";
    
  ngOnInit(): void {
      let today = new Date();
      if([5, 6, 0].indexOf(today.getDay()) !== -1){
         
          this.backgroundImage = "url('./src/assets/friday-cat.jpg')";
          //friday
          if(today.getDay() == 5){
              this.isItFridayYet = "Yes!";
          //weekend
          }else if([6, 0].indexOf(today.getDay()) !== -1){
              this.isItFridayYet = "No, but it's weekend!"; 
          }
      }
  }
}

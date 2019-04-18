import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 
 number:number=8;

 add(a1:number)
 {
   this.number=this.number+a1;
 }

 reset()
 {
   this.number=8;
 }
}

import { Component } from '@angular/core';

let color_opt = function(){
  var num = Math.floor((Math.random()*6)+1);
  if (num == 1){
    return '#FF7F50';
  }
  if (num == 2){
    return '#6495ED';
  }
  if (num == 3){
    return '#2F4F4F';
  }
  if (num == 4){
    return '#E0FFFF';
  }
  if (num == 5){
    return '#D3D3D3';
  }
  if (num == 6){
    return '#008080';
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color_option = [
    color_opt(),
    color_opt(),
    color_opt(),
    color_opt(),
    color_opt(),
    color_opt(),
    color_opt(),
    color_opt(),
    color_opt(),
    color_opt()
  ]
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  question: number = 0;
  
  cquestion: number = 0;
  points :number = 0;

  value; value2; value3; value4; value5; value6; value7; value8; value9; value10;
  value11; value12; value13; value14; value15; 
  
  
  


  constructor(public navCtrl: NavController) {
    
  }

  onClick(x){
    if(x === 'q1' ){
        this.question += 1;
        
    }else if(x === 'q2' && this.value ==="true"){
      this.question += 1;
      this.points += 1;
    }else if(x === 'q2'){
      this.question += 1;
      
    }if(x === 'q3' && this.value2 === "false"){
    this.question += 1;
    this.points += 1;
    }else if(x === 'q3'){
      this.question += 1;
    }else if(x === 'q4' && this.value3 === "true"){
    this.question += 1;
    this.points += 1;
    }else if(x === 'q4'){
      this.question += 1;
    }else if(x === 'q5' && this.value4 === "true"){
      this.question += 1;
      this.points += 1;
    }else if(x === 'q5'){
      this.question += 1;
    }else if(x === 'q6' && this.value5 === "false"){
      this.question += 1;
      this.points += 1;
    }else if(x === 'q6'){
      this.question += 1;
    }else if(x === 'q7' && this.value6 === "true"){
      this.question += 1;
      this.points += 1;
    }else if(x === 'q7'){
      this.question += 1;
    }else if(x === 'q8' && this.value7 === "true"){
      this.question += 1;
      this.points += 1;
    }else if(x === 'q8'){
      this.question += 1;
    }else if(x === 'q9' && this.value8 === "true"){
      this.question += 1;
      this.points += 1;
    }else if(x === 'q9'){
      this.question += 1;
    }else if(x === 'q10' && this.value9 === "true"){
      this.question += 1;
      this.points += 1;
    }else if(x === 'q10'){
      this.question += 1;
    }else if(x === 'q11' && this.value10 === "true"){
      this.question += 1;
      this.points += 1;
    }
    else if(x === 'q11'){
      this.question += 1;
    }else if(x === 'q12' && this.value11 === "false"){
      this.question += 1;
      this.points += 1;
    }else if(x === 'q12'){
      this.question += 1;
    }else if(x === 'q13' && this.value12 === "true"){
      this.question += 1;
      this.points += 1;
    }else if(x === 'q13'){
      this.question += 1;
    }else if(x === 'q14' && this.value13 === "false"){
      this.question += 1;
      this.points += 1;
    }
    else if(x === 'q14'){
      this.question += 1;
    }else if(x === 'q15' && this.value14 === "false"){
      this.question += 1;
      this.points += 1;
    }else if(x === 'q15'){
      this.question += 1;
    }else if(x === 'q16' && this.value15 === "false"){
      this.question += 1;
      this.points += 1;
    }else if(x === 'q16'){
      this.question += 1;
    }


  }

}

import { Component} from '@angular/core';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent  {
  lastName: string;
  stage:string;
  clicks:number = 0;

 constructor(private dataService: DataService) {
  //  this.dataService.stage_servece ='start'
  this.stage = this.dataService.stage_servece;
 // console.log(this.stage );
  this.lastName = this.dataService.getName()==undefined ?'Гость':this.dataService.getName();
   }

 /*Считает количество кликов*/
  onChanged(increased:any){
    increased==true?this.clicks++:this.clicks=this.clicks-6;
    this.randomInt(1, 7) < 2 ? this.condition = false : this.condition = true ;    
  }
  
  /*Случайное число*/
  randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 /*Таймер*/
  timeLeft: number = 10;
  interval; 
  condition: boolean = false;

  onStartTimer() {
    this.dataService.stage_servece ='game'
    this.stage = this.dataService.stage_servece;
   // this.timeLeft = 10;  
    this.interval = setInterval(() => {
      if(this.timeLeft > 1) {
           this.condition = true //используется в таймере для смены кнопки
           this.timeLeft--;
           this.dataService.stage_servece ='finish'
      } else {
        /*почему то все время срабатывает*/
        this.stage = this.dataService.stage_servece;
        this.dataService.addDataClick(this.clicks);
        this.timeLeft = 10; 
        clearInterval(this.interval)//обязательно очистить setInterval
        //console.log(this.interval );
      }
    },1000)

  }

  onFinish(start:boolean){
    this.clicks=0;
   // this.dataService.stage_servece='start';
    this.stage = this.dataService.stage_servece;
    
   //console.log(this.stage);
    
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  product=[
    
    {id:0-750,name:'SF'},
    {id:751-1500,name:'SF'},
    {id:2251-3000,name:'SF'},
    {id:3001-3750,name:'SF'},
    {id:3751-4500,name:'SF'},
    {id:4501-5250,name:'SF'},
    {id:5251,name:'SF'},
  ]

  
 

  constructor() {
   
   }

  ngOnInit() {
  } 

}

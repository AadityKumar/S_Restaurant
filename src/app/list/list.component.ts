

import { Component, OnInit } from '@angular/core';
import {RestaurantService} from '../restaurant.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private restaurant:RestaurantService) { }
  collection:any=[];
  ngOnInit(): void {

    this.restaurant.getlist().subscribe((result)=>{
    console.log(result);
    this.collection=result;

    })
  }
       deleteRestaurant(item){
        console.log(this.collection)
        this.collection.splice(item-1,1)
        this.restaurant.deleteRestaurant(item).subscribe((result)=>{
          console.log(result)
          
        })
         
       }
}

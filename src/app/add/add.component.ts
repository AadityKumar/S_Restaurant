import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import{RestaurantService} from '../restaurant.service'
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  
  addrestaurant= new FormGroup({
    name: new FormControl(' '),
    address: new FormControl(' '),
    email: new FormControl(' '),
    cell: new FormControl(' '),
  })

  constructor( private restaurant:RestaurantService ) { }
     alert:boolean=false



  ngOnInit(): void {
  }
  collectRestaurant(){
       this.restaurant.saveRestaurant(this.addrestaurant.value ).subscribe((result)=>{
       this.alert=true
      })
      this.addrestaurant.reset({})
  }
  CloseAlert(){
    this.alert=false
  }
}

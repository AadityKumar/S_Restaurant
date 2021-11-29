import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import {ActivatedRoute} from '@angular/router'
import{RestaurantService} from '../restaurant.service'
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
   alert:boolean= false
  editrestaurant= new FormGroup({
    name: new FormControl(' '),
    address: new FormControl(' '),
    email: new FormControl(' '),
    cell: new FormControl(' '),
  })
  constructor(private router:ActivatedRoute, private restaurant:RestaurantService) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
     this.restaurant.getCurrentRestaurant(this.router.snapshot.params.id).subscribe((result)=>{
        console.log(result)
      this.editrestaurant= new FormGroup({
        name: new FormControl(result['name']),
        address: new FormControl(result['address']),
        email: new FormControl(result['email']),
        cell: new FormControl(result['cell'])
     })
  })
} 
   collection()
{
  console.log("item",this.editrestaurant.value)
  this.restaurant.updateRestaurant(this.router.snapshot.params.id ,this.editrestaurant.value).subscribe((result)=>{
    console.log("result",result)
    this.alert=true
  })
}
  closeAlert(){
    this.alert=false
  }
}
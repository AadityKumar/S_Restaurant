import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
url="http://localhost:3000/restaurant"
  constructor(private http :HttpClient) { }
  getlist(){
    
   return this.http.get(this.url)
  }
  saveRestaurant(data){
       console.log(data)
    return this.http.post(this.url,data)
  }
  deleteRestaurant(id){
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentRestaurant(id){
    return this.http.get(`${this.url}/${id}`)
  }

  updateRestaurant(id,data){
    return this.http.put(`${this.url}/${id}`,data)
  }
}

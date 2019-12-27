import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  
  urls = {
  	'display_url': 'https://hotellistbackend.herokuapp.com/hotel/list',
  	'add_url': 'http://localhost:8080/thought_clan/hotel/add'
  };


  public is_loading = new Subject<any>();;
  constructor(private http : HttpClient) { }

  getMethod(url:any){
  	return this.http.get(url)
  }

  postMethod(url,request){
  	return this.http.post(url,request)
  }
}

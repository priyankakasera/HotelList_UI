import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  loader_counter = 0
  display_loading = new Subject<any>();
  urls = {
  	'display_url': 'https://hotellistbackend.herokuapp.com/hotel/list',
  	'add_url': 'https://hotellistbackend.herokuapp.com/hotel/add'
  };


  public is_loading = new Subject<any>();;
  constructor(private http : HttpClient) { }

  getMethod(url:any){
  	 let timeoutId = setTimeout(() => {
  	 		this.loader_counter++
            this.display_loading.next(true);
      }, 1000);
  	
  	return this.http.get(url).pipe(
  			finalize(()=>{
  				clearTimeout(timeoutId)
  				 if (this.loader_counter > 0) {
                        this.loader_counter--;
                  }
  				this.display_loading.next(false);
  		})
  	)
   }

  postMethod(url,request){
  	return this.http.post(url,request)
  }
}

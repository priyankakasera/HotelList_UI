import { Component,OnInit } from '@angular/core';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  is_loading = false
  constructor(private utility_service : UtilityService){}

  ngOnInit(){
  	this.utility_service.display_loading.subscribe(
  		(data)=>{
  			if(data)
  				this.is_loading = data
  		}
  	)
  }
}

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
  		(status)=>{
  			if (!!status && !this.is_loading) {
          setTimeout(() => {
            if (this.utility_service.getLoaderCounter() > 0) {
              this.is_loading = status;
            }
          }, 100);
        }
        if (!status && !!this.is_loading) {
          if (this.utility_service.getLoaderCounter() <= 0) {
            let time_interval = setInterval(
              () => {
                if (this.utility_service.getLoaderCounter() <= 0) {
                  this.is_loading = status;
                  this.utility_service.setLoaderCounter(0);
                  clearInterval(time_interval);
                }
              }, 2000);
          }
        }

      }
  	)
  }
}

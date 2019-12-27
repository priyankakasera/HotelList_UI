import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { UtilityService } from 'src/app/services/utility.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

	
  dataSource=[];
  displayedColumns: string[] = ['name', 'host_name', 'neighbourhood_group', 'neighbourhood','latitude','longitude','room_type','price'];
  

  constructor(private http:HttpClient,private utility_service:UtilityService) { }

  ngOnInit() {

  	const httpHeaders = new HttpHeaders();
  	this.utility_service.getMethod(this.utility_service.urls.display_url).subscribe(
  	(response)=>{console.log(response);
  		this.dataSource = response['answer'];
  	});
  }

}

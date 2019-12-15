import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	
  dataSource=[];
  displayedColumns: string[] = ['name', 'host_name', 'neighbourhood_group', 'neighbourhood','latitude','longitude','room_type','price'];
  

  constructor(private http:HttpClient) { }

  ngOnInit() {
  	const httpHeaders = new HttpHeaders();
  	httpHeaders.set("Access-Control-Allow-Origin","*");
  	this.http.get("http://hotellistbackend.herokuapp.com/hotel/list",{headers:httpHeaders}).subscribe(
  	(response)=>{
  		this.dataSource = response['data'];
  	});
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  	this.http.get("/thought_clan/hotel/list").subscribe(
  	(response)=>{
  		this.dataSource = response['data'];
  	});
  }

}

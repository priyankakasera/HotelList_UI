import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/services/utility.service';
import { CustomValidators } from 'src/app/validators/validators';
import { validateUser } from 'src/app/validators/validators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  addForm : FormGroup;
  constructor(private router : Router,private utility_service:UtilityService,private _snackBar: MatSnackBar) { }

  ngOnInit() {
  	this.addForm = new FormGroup({
  		'name' : new FormControl('',[Validators.required,CustomValidators.validateAlphabets()]),
  		'host_name' : new FormControl('',[Validators.required,CustomValidators.validateAlphabets()]),
  		'neighbourhood_group' : new FormControl('',[Validators.required,CustomValidators.validateAlphabets()]),
  		'neighbourhood' : new FormControl('',[Validators.required,CustomValidators.validateAlphabets()]),
  		'latitude' : new FormControl('',[Validators.required,CustomValidators.validateDecimal()]),
  		'longitude' : new FormControl('',[Validators.required,CustomValidators.validateDecimal()]),
  		'room_type': new FormControl('',[Validators.required,CustomValidators.validateAplhaAndSpecialChars()]),
  		'price': new FormControl('',[Validators.required,CustomValidators.validateNumbers()])
  	});
  }

  addData(){
  	console.log(this.addForm)
  	let request = {
  		name : this.addForm.get('name').value,
  		host_name : this.addForm.get('host_name').value,
  		neighbourhood_group : this.addForm.get('neighbourhood_group').value,
  		neighbourhood : this.addForm.get('neighbourhood').value,
  		latitude : this.addForm.get('latitude').value,
  		longitude : this.addForm.get('longitude').value,
  		room_type : this.addForm.get('room_type').value,
  		price : this.addForm.get('price').value,
  	}
  	this.utility_service.postMethod(this.utility_service.urls.add_url,request).subscribe(
  		(data)=>{
        console.log(data)
        if(data['answer'].status===200){
  			 this.openSnackBar("Inserted successfully","View Your data in the list")
         this.router.navigate(['/home/display'])
        }
        else if(data['answer'].status===409)
          this.openSnackBar(data['answer'].message,"Please enter a valid id")

        this.addForm.reset()
  		}
  	)

  }

  navigateToHome(){
    this.router.navigate(['/home'])
  }

  openSnackBar(message: string, action) {
    this._snackBar.open(message, action, {
      duration: 8000,
    });
  }

}

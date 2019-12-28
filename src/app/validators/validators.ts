import {
    FormGroup,
    FormControl,
    AbstractControl,
    AsyncValidator,ValidationErrors,AsyncValidatorFn
} from '@angular/forms';

import {
    UtilityService
} from '../services/utility.service';
import { map} from 'rxjs/operators';
import {Observable } from 'rxjs';

 export function validateUser(utility_service: UtilityService): AsyncValidatorFn{
        return (control: FormControl): Promise<ValidationErrors|null>|Observable<ValidationErrors|null> => {
            let queryParams = {
                'id':control.value
            }
            return utility_service.getMethod("http://localhost:8080/thought_clan/hotel/validateUser",{queryParams:queryParams}).pipe(
                map(users=>{
                    return users && users['length'] >0 ?{'message':'Already exists'}:null;
                    }
                )
                
            );
        }
    }

export class CustomValidators {

    static validateDecimal() {
        return (control: FormControl) => {
        	let number = control.value.trim();
        	let regex= /[+-]?([0-9]*[.])?[0-9]+/;
        	if(number!==null && !regex.test(number)){
        		return{
        			'message':'This field should contain a number'
        		}
        	}
        	return null;
        }
       }


    static validateAplhaAndSpecialChars(){
    	return (control: FormControl) => {
    		let number = control.value.trim();
    		let regex = /^[ A-Za-z0-9_@./#&+-]*$/;
    		if(number!==null && !regex.test(number)){
    			return {
    				'message' : 'This field should contain alphabets'
    			}
    		}
    		return null;
    	}
    }

    static validateNumbers(){
    	return (control: FormControl) => {
    		let number = control.value.trim();
    		let regex = /^[0-9]*$/;
    		if(number!==null && !regex.test(number)){
    			return {
    				'message' : 'This field should contain numbers only'
    			}
    		}
    		return null;
    	}
    }

    static validateAlphabets(){
    	return (control: FormControl) => {
    		let number = control.value.trim();
    		let regex = /^[a-zA-Z ]*$/;
    		if(number!==null && !regex.test(number)){
    			return {
    				'message' : 'This field should contain alphabets only'
    			}
    		}
    		return null;
    	}
    }

    
 }
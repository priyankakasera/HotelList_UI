import {
    FormGroup,
    FormControl,
    AbstractControl
} from '@angular/forms';
import {
    UtilityService
} from '../services/utility.service';

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
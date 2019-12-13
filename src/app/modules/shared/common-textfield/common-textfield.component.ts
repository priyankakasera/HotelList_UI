import { Component, OnInit, AfterViewInit, Input, Output , EventEmitter} from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-common-textfield',
  templateUrl: './common-textfield.component.html',
  styleUrls: ['./common-textfield.component.scss']
})
export class CommonTextfieldComponent implements OnInit {

  @Input() placeholder;
  @Input() input_id;
  @Input() btn_cta;
  @Input() label;
  @Input() required;
  @Input() type;
  @Input() allowEdit;
  @Input() required_error;

  // required
  @Input() control_name;
  @Input() parent_FG: FormGroup;

  // emitters
  @Output() onCTA: EventEmitter<any> = new EventEmitter();
  control: AbstractControl;
  hide = true;
  constructor() { }

  ngOnInit() {
  	this.control = this.parent_FG.get(this.control_name);
    this.control.valueChanges.subscribe(
      (data) => {
        console.log(data);
        console.log(this.control);
      }
    );
  }

  performCTAAction(event) {
    this.onCTA.emit(event);
  }

}

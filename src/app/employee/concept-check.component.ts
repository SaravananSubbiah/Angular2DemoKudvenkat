import {Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
    selector: 'concept-check',
    templateUrl: 'concept-check.component.html',
    styleUrls: ['concept-check.component.css']
})
export class ConceptCheckComponent{


    onClick(){
        //this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
        //console.log(this.selectedRadioButtonValue);
        alert('I am touched');
    }
} 
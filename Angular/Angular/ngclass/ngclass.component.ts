import { Component } from '@angular/core';    
    
@Component({    
    selector: 'style-ap',    
    templateUrl: './ngclass.component.html',
    styleUrls: ['./ngclass.component.css']    
})    
export class NgclassComponent {    
    applyBoldClass: boolean = true;    
    applyItalicsClass: boolean = true;    
    
    applyClasses() {    
        let classes = {    
            boldClass: this.applyBoldClass,    
            italicsClass: this.applyItalicsClass    
        };    
    
        return classes;    
    }    
}    	

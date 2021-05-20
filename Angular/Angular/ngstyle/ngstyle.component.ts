import { Component } from '@angular/core';    
    
	@Component({    
    selector: 'style-app',    
    templateUrl: './ngstyle.component.html',	})    
	export class NgstyleComponent {    
		isBold: boolean = true;    
		fontSize: number = 30;    
		isItalic: boolean = true;    
    
    MyStyle() {    
        let mystyles = {    
            'font-weight': this.isBold ? 'bold' : 'normal',    
            'font-style': this.isItalic ? 'italic' : 'normal',    
            'font-size.px': this.fontSize    
        };    
    
        return mystyles;    
		}    
	}   

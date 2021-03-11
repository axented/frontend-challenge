import { Component, OnInit,Input,Output } from '@angular/core';
/*Router-------------------------------*/
import { Router } from '@angular/router';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

    @Input() blogger:  any = {};
    @Input() index:    number;

    constructor( private router:Router ) { }

    ngOnInit(): void {
    }
    
    verBlogger(){
        this.router.navigate(['/profile',this.index]);        
    }

}

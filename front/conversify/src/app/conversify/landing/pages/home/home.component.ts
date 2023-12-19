import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    texto(){
        console.log("texto");
        
    }

    video(){
        console.log("video");
        
    }

    ambos(){
        console.log("ambos");
        
    }
}

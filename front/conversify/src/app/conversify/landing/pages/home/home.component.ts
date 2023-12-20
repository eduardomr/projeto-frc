import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    constructor(
        private navigationService: NavigationService,
    ) {}

    ngOnInit(): void {}

    texto(){
        console.log("texto");
        this.navigationService.navigate(['text']);
    }

    video(){
        console.log("video");
        
    }

    ambos(){
        console.log("ambos");
        
    }
}

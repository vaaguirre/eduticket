import { Component, OnInit } from '@angular/core';
import { EduticketService } from '../services/eduticket.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    appname = 'Eduticket';
    ticketCount = 0;

    constructor(private api: EduticketService) { }

    ngOnInit() {
        this.api.getCount()
            .subscribe(data => this.ticketCount = data.count);
    }

}

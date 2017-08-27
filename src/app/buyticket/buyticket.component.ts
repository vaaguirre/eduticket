import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-buyticket',
    templateUrl: './buyticket.component.html',
    styleUrls: ['./buyticket.component.css']
})
export class BuyticketComponent implements OnInit {

    step = 1;

    constructor() { }

    ngOnInit() {
    }

    goToStep(step) {
        this.step = step;
    }

}

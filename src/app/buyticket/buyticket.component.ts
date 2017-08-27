import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { EduticketService } from '../services/eduticket.service';

@Component({
    selector: 'app-buyticket',
    templateUrl: './buyticket.component.html',
    styleUrls: ['./buyticket.component.css']
})
export class BuyticketComponent implements OnInit {

    public step: number = 1;
    public name: string;
    public email: string;
    public token: string;
    public backCounter: number = 3;
    public subscription: Subscription;
    public success: Boolean = false;

    constructor(
        private router: Router,
        private api: EduticketService
    ) { }

    ngOnInit() {
    }

    goToStep(step) {
        this.success = false;
        this.step = step;
    }

    buyTicket() {
        this.step = 3;
        console.log("buyticket");
        this.api.buyTicket(this.name, this.email, this.token)
            .subscribe(response => {
                console.log(this.name, this.email, this.token);
                // this.step = 4;
                this.success = true;
                this.startCountDown();
            }, error => {
                console.log(error);
                alert("Token Invalido");
                this.step = 2;
            });
    }

    startCountDown() {
        var self = this;

        let timer = Observable.timer(1000,1000);
        this.subscription = timer.subscribe(t=> {
            self.backCounter--;
            if(self.backCounter == 0) {
                console.log("redirect...");
                this.router.navigate(['']);
                self.subscription.unsubscribe();
            }
        });
    }
}

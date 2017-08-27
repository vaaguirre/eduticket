import { Component, OnInit } from '@angular/core';
import { EduticketService } from '../services/eduticket.service';

@Component({
    selector: 'app-selectwinner',
    templateUrl: './selectwinner.component.html',
    styleUrls: ['./selectwinner.component.css']
})
export class SelectwinnerComponent implements OnInit {

    ticketCount = 0;
    posibleWinner: string;
    password: string = "hsuticketedu";
    passwordInput: string;
    error: boolean = false;
    raffleHasBegun: boolean = false;
    maxRuns: number = 10;
    winner: string;
    test: boolean = true;

    emails = [
        "victor@sube.la",
        "victor.aguirre417@gmail.com",
        "vic_aguirre91@hotmail.com",
        "victor.aguirre@fcscontrol.com",
        "vaguirre@number8.com",
    ]

    constructor(private api: EduticketService) { }

    ngOnInit() {
        this.api.getCount()
            .subscribe(data => this.ticketCount = data.count);
    }

    beginRaffle() {
        if (this.passwordInput != this.password) {
            this.error = true;
            return;
        }
        this.error = false;
        this.raffleHasBegun = true;
        var self = this;
        var x = 0;
        var interval = setInterval(function () {
            if (x < self.maxRuns) {
                self.api.getRandom((x == self.maxRuns - 1 ) && !self.test ? true : false).subscribe(response => {
                    console.log(response);
                    self.posibleWinner = response.email;
                    if(x == self.maxRuns) {
                        self.winner = self.posibleWinner;
                    }
                });
                x++;
            } else if (x == self.maxRuns) {
                clearInterval(interval)
            }
            console.log("interval");
        }, 200)
    }

}

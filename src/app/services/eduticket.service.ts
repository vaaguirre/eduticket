import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class EduticketService {

    constructor(private apiService: ApiService) { }

    getCount() {
        return this.apiService.get("count");
    }

    buyTicket(name, email, token) {
        return this.apiService.post("buy-ticket", {
            "fullname" : name,
            "email" : email,
            "token" : token
        });
    }

    getRandom(test = null) {
        if(!test) {
            return this.apiService.get("random");
        } else {
            return this.apiService.get("random?send=true");
        }
    }
}

import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {

    private api_url: string = "https://eduticket-api.herokuapp.com/";

    constructor(
        private router: Router,
        private http: Http,
    ) { }

    public get(endpoint: string) {

        let headers = new Headers({ 'Content-Type': 'JSON' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.api_url + endpoint)
            .map((response: Response) => response.json())
            .catch(err => this.handleHttpError(err));
    }

    public post(endpoint: string, body: Object) {

        return this.http.post(this.api_url + endpoint, body)
            .map((response: Response) => response.json())
            .catch(err => this.handleHttpError(err));
    }

    public handleHttpError(err: Response) {

        return Observable.throw(err);
    }
}

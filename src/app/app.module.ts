import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule, NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuyticketComponent } from './buyticket/buyticket.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { title: 'Inicio' }
    },
    {
        path: 'buyticket',
        component: BuyticketComponent,
        data: { title: 'Compra tu Ticket' }
    },
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BuyticketComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false }
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

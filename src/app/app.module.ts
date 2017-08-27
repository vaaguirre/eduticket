import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule, NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuyticketComponent } from './buyticket/buyticket.component';
import { SelectwinnerComponent } from './selectwinner/selectwinner.component';
import { ApiService } from './services/api.service';
import { EduticketService } from './services/eduticket.service';

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
    {
        path: 'selectwinner',
        component: SelectwinnerComponent,
        data: { title: 'Sorteo' }
    },
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BuyticketComponent,
        SelectwinnerComponent
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
    providers: [
        ApiService,
        EduticketService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import ApplicationComponent from './components/application/application.component';
import NaviComponent from './components/navi/navi.component';
import NavibarComponent from './components/navi/navibar.component';
import FooterComponent from './components/footer/footer.component';
import DashboardComponent from './components/dashboard/dashboard.component';

import { ChartModule } from './components/chart/chart.module';


@NgModule({
    imports : [BrowserModule, ChartModule, RouterModule.forRoot([
      {path:'', component:DashboardComponent }
    ])],
    declarations : [
        ApplicationComponent
        ,NaviComponent
        ,NavibarComponent
        ,FooterComponent
        ,DashboardComponent

    ],
    providers : [{provide:LocationStrategy, useClass:HashLocationStrategy}],
    bootstrap:[ApplicationComponent]

})

export class AppModule{}

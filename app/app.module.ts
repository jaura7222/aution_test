import { NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import ApplicationComponent from './components/application/application.component';
import NaviComponent from './components/navi/navi.component';
import NavibarComponent from './components/navi/navibar.component';
import FooterComponent from './components/footer/footer.component';
import DashboardContent from './content/dashboard/dashboard.content';
import ChartContent from './content/chart/chart.content';

@NgModule({
    imports : [BrowserModule, RouterModule.forRoot([
      {path:'', component:DashboardContent },
      {path:'chart', component:ChartContent }
    ])],
    declarations : [
        ApplicationComponent
        ,NaviComponent
        ,NavibarComponent
        ,FooterComponent
        ,DashboardContent
        ,ChartContent
    ],
    providers : [{provide:LocationStrategy, useClass:HashLocationStrategy}],
    bootstrap:[ApplicationComponent]

})

export class AppModule{}

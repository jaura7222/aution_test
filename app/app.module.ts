import { NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import ApplicationComponent from './components/application/application.component';
import NaviComponent from './components/navi/navi.component';
import NavibarComponent from './components/navi/navibar.component';
import FooterComponent from './components/footer/footer.component';

@NgModule({
    imports : [BrowserModule],
    declarations : [
        ApplicationComponent
        ,NaviComponent
        ,NavibarComponent
        ,FooterComponent
    ],
    bootstrap:[ApplicationComponent]

})

export class AppModule{}

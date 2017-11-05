import { NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import ApplicationComponent from './components/application/application.component';


@NgModule({
    imports : [BrowserModule],
    declarations : [
        ApplicationComponent
    ],
    bootstrap:[ApplicationComponent]

})

export class AppModule{}

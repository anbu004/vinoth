import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { Network } from '@ionic-native/network';
import {Login} from '../pages/login/login'
import {ChilddetailsPage} from '../pages/childdetails/childdetails';
import {ChildinfoPage} from '../pages/childinfo/childinfo';
import {ChildinfoeditPage} from '../pages/childinfoedit/childinfoedit';

@NgModule({
  declarations: [
    MyApp,
    Login,
    ChilddetailsPage,
    ChildinfoPage,
    ChildinfoeditPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    ChilddetailsPage,
    ChildinfoPage,
    ChildinfoeditPage
  ],
  providers: [
    Network,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}

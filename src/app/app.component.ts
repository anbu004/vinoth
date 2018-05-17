import { Component,ViewChild } from '@angular/core';
import {Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { ChilddetailsPage } from '../pages/childdetails/childdetails';
import { Login } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Login;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  children(){
    this.nav.setRoot(ChilddetailsPage)
  }

  openPage(page) {

    if(page.component) {
            this.nav.setRoot(page.component);
        } else {
            // Since the component is null, this is the logout option
            // ...
    
            // logout logic
            // ...
    
            // redirect to home
          
            this.nav.setRoot(Login);
        }
    }
    goLogin(){
      // this.nav.goToRoot(true);
      this.nav.setRoot(Login);
    }    
}



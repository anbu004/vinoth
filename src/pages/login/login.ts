import { Component,trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading,ToastController } from 'ionic-angular';

import { Storage } from '@ionic/storage';
// import { OdooRPCService } from 'angular2-odoo-jsonrpc';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Network } from '@ionic-native/network';


import { Events } from 'ionic-angular';
import { ChilddetailsPage } from '../childdetails/childdetails';



declare var Connection: any;
declare var navigator: any;
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  })


export class Login {
  loading: Loading;
  dbs = [];
  user = {db: "", name: "", password : ""}; 
  
  status;
  hide:boolean=false
  pass="";
  voice:any;

  constructor(private toastCtrl: ToastController,private network: Network,private http: Http,private nav: NavController,  private alertCtrl: AlertController, private loadingCtrl: LoadingController,private storage:Storage) {
     
    if(this.network.type == "unknown" || this.network.type == "none" || this.network.type == undefined){
   
      this.user.name='';
      this.user.password='';

    }else{

      this.storage.get('uname').then((val) => {
        console.log("uid : ",val);
        if(val){
          this.user.name = val;
        }
    });
this.storage.get('password').then((val) => {
        console.log("uid : ",val);
        if(val){
          this.user.password = val;
        }
    });

    }
        
       
    
  }


  show(){
    if(this.hide == true){
      this.pass="text"
    }else{
      this.pass="password"
    }
  }
 


  public login() {

    if(this.network.type == "unknown" || this.network.type == "none" || this.network.type == undefined){
    
      this.storage.get('uname').then((val) => {
        console.log("uid : ",val);
        
   
this.storage.get('password').then((val1) => {
        console.log("uid : ",val1);
      
        if(this.user.name == val && this.user.password == val1){
          this.nav.setRoot(ChilddetailsPage)
        }else{
          let toast = this.toastCtrl.create({
            message: 'Invalid Username && Password!',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
        }

      });
    });

    
    }else{
      this.showLoading()
      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      let options = new RequestOptions({ headers: headers });
  
    let body = {'username':this.user.name,'password':this.user.password};
    this.http.post('https://offline.pinnacleseven.com/api/login',JSON.stringify(body),options).toPromise().then(result=>{
      console.log("Result",JSON.parse(result['_body']))
      var data = JSON.parse(result['_body']).success;
  
      if(data == 'done'){
        this.storage.set('uname',this.user.name);
              
        this.storage.set('password',this.user.password);
  
        this.loading.dismiss();
        this.nav.setRoot(ChilddetailsPage)
      }else{
        let toast = this.toastCtrl.create({
            message: 'Invalid Username && Password!',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
          this.loading.dismiss();
      }
  
  
  
    }).catch(err=>{
      console.log("Error",err)
      this.loading.dismiss();
    })
  
    }

 
    
          //
          
 }



  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }
 
  showError(text) {
    setTimeout(() => {
      // this.loading.dismiss();
    });
 
    let alert = this.alertCtrl.create({
      title: 'Error ',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
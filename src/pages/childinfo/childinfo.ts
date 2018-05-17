import { Component,Injectable } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { ChilddetailsPage } from '../childdetails/childdetails';
import { Storage } from '@ionic/storage';
// import { ConnectivityProvider } from '../../providers/connectivity/connectivity';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Network } from '@ionic-native/network';
/*
  Generated class for the ChildinfoPage page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Injectable()

@Component({
  selector: 'page-childinfo',
  templateUrl: 'childinfo.html'
})
export class ChildinfoPage {

  hide:boolean=false;

  f_name='';
  l_name='';
  m_phone='';
  m_email='';
  c_birth_date='';
  child_gender='';
  institution='';
  fa_name='';
  in_name='';
  sn_name='';
  c_r_street='';
  c_r_city='';
  c_r_zip='';
  c_r_country='';
  child_ethincity='';
  c_r_state='';
  childdetail=[];
  model={}

  forms=[]

  constructor(private network: Network,private toastCtrl: ToastController, public storage:Storage,public navCtrl: NavController, public navParams: NavParams,private http: Http) {
   
    // watch network for a disconnect
let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
  console.log('network was disconnected :-(');
});

// stop disconnect watch
disconnectSubscription.unsubscribe();


// watch network for a connection
let connectSubscription = this.network.onConnect().subscribe(() => {
  console.log('network connected!');
  // We just got a connection but we need to wait briefly
   // before we determine the connection type. Might need to wait.
  // prior to doing any api requests as well.

  this.storage.get('childinfo').then((val2) => {
    console.log("childinfo : "+val2);
    this.forms=val2
  if(this.forms){
    let data = this.forms.map((data)=>{


      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      let options = new RequestOptions({ headers: headers });

    let body = JSON.stringify({'f_name':data.f_name,'l_name':data.l_name,'m_phone':data.m_phone,'m_email':data.m_email,'c_birth_date':data.c_birth_date,'child_gender':data.child_gender,'fa_name':data.fa_name,'in_name':data.in_name,'sn_name':data.sn_name,'c_r_street':data.c_r_street,'c_r_city':data.c_r_city,'c_r_zip':data.c_r_zip,'c_r_country':data.c_r_country,'c_r_state':data.c_r_state,'child_ethincity':data.child_ethincity});
  
  return new Promise(resolve => {
      this.http.post('https://offline.pinnacleseven.com/api/creatUser', body, options)
      .subscribe(data => {
        this.navCtrl.setRoot(ChilddetailsPage)
        let toast = this.toastCtrl.create({
          message: 'Sync Successfully!',
          duration: 3000,
          position: 'middle'
        });
        toast.present();
        console.log(data['_body']);
       }, error => {
        console.log(error);// Error getting the data
      });
  });


    });
    this.storage.set('childinfo','');
  }});


  setTimeout(() => {
    if (this.network.type === 'wifi') {
      console.log('we got a wifi connection, woohoo!');


      this.storage.get('childinfo').then((val2) => {
        console.log("childinfo : "+val2);
        this.forms=val2
      if(this.forms){
        let data = this.forms.map((data)=>{
    
    
          var headers = new Headers();
          headers.append("Accept", 'application/json');
          headers.append('Content-Type', 'application/json' );
          let options = new RequestOptions({ headers: headers });
    
        let body = JSON.stringify({'f_name':data.f_name,'l_name':data.l_name,'m_phone':data.m_phone,'m_email':data.m_email,'c_birth_date':data.c_birth_date,'child_gender':data.child_gender,'fa_name':data.fa_name,'in_name':data.in_name,'sn_name':data.sn_name,'c_r_street':data.c_r_street,'c_r_city':data.c_r_city,'c_r_zip':data.c_r_zip,'c_r_country':data.c_r_country,'c_r_state':data.c_r_state,'child_ethincity':data.child_ethincity});
      
      return new Promise(resolve => {
          this.http.post('https://offline.pinnacleseven.com/api/creatUser', body, options)
          .subscribe(data => {
            this.navCtrl.setRoot(ChilddetailsPage)
            let toast = this.toastCtrl.create({
              message: 'Sync Successfully!',
              duration: 3000,
              position: 'middle'
            });
            toast.present();
            console.log(data['_body']);
           }, error => {
            console.log(error);// Error getting the data
          });
      });
    
    
        });
        this.storage.set('childinfo','');
      }});


    }
  }, 3000);
});
  }
  discard(){
    this.navCtrl.setRoot(ChilddetailsPage)
  }

  address(){
    if(this.hide == true){
this.hide=false
    }else{
this.hide=true
    }
  }

  submit(){

    if(this.f_name == ''){
      let toast = this.toastCtrl.create({
        message: 'Invalid First Name!',
        duration: 3000,
        position: 'bottom'
      });
    toast.present();
    }else if(this.l_name == ''){
      let toast = this.toastCtrl.create({
        message: 'Invalid Last Name!',
        duration: 3000,
        position: 'bottom'
      });
    toast.present();
    }else if(this.m_phone == ''){
      let toast = this.toastCtrl.create({
        message: 'Invalid Phone!',
        duration: 3000,
        position: 'bottom'
      });
    toast.present();
    }else {
      if(this.network.type == "unknown" || this.network.type == "none" || this.network.type == undefined){

console.log("offffffffffffffffline")
let values=[];
this.storage.get('childinfo').then((val2) => {
   console.log("childinfo subcribe data : "+JSON.stringify(val2));
   
 values=val2
});

values.push({'f_name':this.f_name,'l_name':this.l_name,'m_phone':this.m_phone,'m_email':this.m_email,'c_birth_date':this.c_birth_date,'child_gender':this.child_gender,'fa_name':this.fa_name,'in_name':this.in_name,'sn_name':this.sn_name,'c_r_street':this.c_r_street,'c_r_city':this.c_r_city,'c_r_zip':this.c_r_zip,'c_r_country':this.c_r_country,'c_r_state':this.c_r_state,'child_ethincity':this.child_ethincity})
let toast = this.toastCtrl.create({
  message: 'Stored in Offline!',
  duration: 3000,
  position: 'bottom'
});
toast.present();
this.storage.set('childinfo',values);
this.navCtrl.setRoot(ChilddetailsPage)


      }else{
       


        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json' );
        let options = new RequestOptions({ headers: headers });

      let body = JSON.stringify({'f_name':this.f_name,'l_name':this.l_name,'m_phone':this.m_phone,'m_email':this.m_email,'c_birth_date':this.c_birth_date,'child_gender':this.child_gender,'fa_name':this.fa_name,'in_name':this.in_name,'sn_name':this.sn_name,'c_r_street':this.c_r_street,'c_r_city':this.c_r_city,'c_r_zip':this.c_r_zip,'c_r_country':this.c_r_country,'c_r_state':this.c_r_state,'child_ethincity':this.child_ethincity});
    
    return new Promise(resolve => {
        this.http.post('https://offline.pinnacleseven.com/api/creatUser', body, options)
        .subscribe(data => {
          this.navCtrl.setRoot(ChilddetailsPage)
          let toast = this.toastCtrl.create({
            message: 'Created Successfully!',
            duration: 3000,
            position: 'middle'
          });
          toast.present();
          console.log(data['_body']);
         }, error => {
          console.log(error);// Error getting the data
        });
    });

      //}

      
    }
  }
  
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildinfoPagePage');
  }

}

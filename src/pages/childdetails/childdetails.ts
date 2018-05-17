import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChildinfoPage } from '../childinfo/childinfo';
import { Storage } from '@ionic/storage';
import { ChildinfoeditPage } from '../childinfoedit/childinfoedit';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Network } from '@ionic-native/network';
/*
  Generated class for the ChilddetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-childdetails',
  templateUrl: 'childdetails.html'
})
export class ChilddetailsPage {
  childdetail=[];
  posts: any;
  constructor(private network: Network,public http: Http,public storage:Storage,public navCtrl: NavController, public navParams: NavParams) {
    
    if(this.network.type == "unknown" || this.network.type == "none" || this.network.type == undefined){
  
      storage.get('childdetail').then((val) => {
        console.log(" data : "+JSON.stringify(val));
        if(val == null){
  
        }else{
          var read=val.map(data=>{
            this.childdetail.push({'f_name':data.f_name,'l_name':data.l_name,'m_phone':data.m_phone,'m_email':data.m_email,'c_birth_date':data.c_birth_date,'child_gender':data.child_gender,'fa_name':data.fa_name,'in_name':data.in_name,'sn_name':data.sn_name,'c_r_street':data.c_r_street,'c_r_city':data.c_r_city,'c_r_zip':data.c_r_zip,'c_r_country':data.c_r_country,'c_r_state':data.c_r_state,'child_ethincity':data.child_ethincity})
           })
           storage.get('childinfo').then((vals) => {
        console.log(" data : "+JSON.stringify(vals));
        if(vals == null){
  
        }else{
          var read=vals.map(data=>{
            this.childdetail.push({'f_name':data.f_name,'l_name':data.l_name,'m_phone':data.m_phone,'m_email':data.m_email,'c_birth_date':data.c_birth_date,'child_gender':data.child_gender,'fa_name':data.fa_name,'in_name':data.in_name,'sn_name':data.sn_name,'c_r_street':data.c_r_street,'c_r_city':data.c_r_city,'c_r_zip':data.c_r_zip,'c_r_country':data.c_r_country,'c_r_state':data.c_r_state,'child_ethincity':data.child_ethincity})
           })
          }
        });
            }
      });


    }else{
      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      let options = new RequestOptions({ headers: headers });
      let body={
        "getData":true
        }
  
      this.http.post("https://offline.pinnacleseven.com/api/getDatas", body, options)
      .subscribe(data => {
      console.log("sdsdsd",data);
      var ddd = JSON.parse(data['_body']);
      this.childdetail = ddd;
      this.storage.set('childdetail',this.childdetail);
      console.log(JSON.stringify(ddd));
      });
      
    }
  
   
  }

  childinfo(){
    this.navCtrl.push(ChildinfoPage)
  }

  formview(item){
console.log(item)
this.navCtrl.push(ChildinfoeditPage,{param1 : item})


  }

  clear(item){
    console.log(typeof item, item)
    console.log(JSON.stringify(this.childdetail))
    let index = this.childdetail.indexOf(item);
       
      if(index > -1){
          this.childdetail.splice(index, 1); // works
         }
        
        console.log("clear"+JSON.stringify(this.childdetail))
        this.storage.set('childdetail',this.childdetail);
        return this.childdetail
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChilddetailsPagePage');
  }

}

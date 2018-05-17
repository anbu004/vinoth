import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { ChilddetailsPage } from '../childdetails/childdetails';
import { Storage } from '@ionic/storage';
// import { ConnectivityProvider } from '../../providers/connectivity/connectivity';
/*
  Generated class for the ChildinfoeditPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-childinfoedit',
  templateUrl: 'childinfoedit.html'
})
export class ChildinfoeditPage {

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
  isenabled: boolean = false;
  editbutton: boolean = true;
  data:any
  deleteing = [];


  constructor(public storage:Storage,private toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams) {
  
    this.data=navParams.get('param1')
    console.log("data",this.data)
   
    this.f_name=this.data.f_name
    this.l_name=this.data.l_name
    this.m_phone=this.data.m_phone
    this.c_birth_date=this.data.c_birth_date
    this.child_gender=this.data.child_gender
    this.institution=this.data.institution
    this.fa_name=this.data.fa_name
    this.m_email=this.data.m_email
    this.in_name=this.data.in_name
    this.sn_name=this.data.sn_name
    this.c_r_street=this.data.c_r_street
    this.c_r_city=this.data.c_r_city
    this.c_r_zip=this.data.c_r_zip
    this.c_r_country=this.data.c_r_country
    this.child_ethincity=this.data.child_ethincity;
    this.c_r_state=this.data.c_r_state

    this.storage.get('childdetail').then((val) => {
      console.log(" data : "+val);
      if(val == null){

      }else{
        var read=val.map(data=>{
          this.childdetail.push({'f_name':data.f_name,'l_name':data.l_name,'m_phone':data.m_phone,'m_email':data.m_email,'c_birth_date':data.c_birth_date,'child_gender':data.child_gender,'fa_name':data.fa_name,'in_name':data.in_name,'sn_name':data.sn_name,'c_r_street':data.c_r_street,'c_r_city':data.c_r_city,'c_r_zip':data.c_r_zip,'c_r_country':data.c_r_country,'c_r_state':data.c_r_state,'child_ethincity':data.child_ethincity})
        })
      }
    });
   
  }
  
  address(){
    if(this.hide == true){
this.hide=false
    }else{
this.hide=true
    }
  }

  edit(item) {

    this.editbutton = false;
    this.isenabled = true;
   
   //console.log(typeof this.data , this.data)
   
  }

  discard(){
    // this.childdetail.push({'firstname':this.firstname,'lastname':this.lastname,'phone':this.phone,'email':this.email,'dob':this.dob,'gender':this.gender,'institution':this.institution,'fb':this.fb})
    // this.storage.set('childdetail',this.childdetail);
    this.navCtrl.setRoot(ChilddetailsPage)
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
    }else if(this.m_email == ''){
      let toast = this.toastCtrl.create({
        message: 'Invalid Email!',
        duration: 3000,
        position: 'bottom'
      });
    toast.present();
    }else if(this.c_birth_date == ''){
      let toast = this.toastCtrl.create({
        message: 'Invalid DOB!',
        duration: 3000,
        position: 'bottom'
      });
    toast.present();
    }else if(this.child_gender == ''){
      let toast = this.toastCtrl.create({
        message: 'Invalid Gender!',
        duration: 3000,
        position: 'bottom'
      });
    toast.present();
    }else  if(this.fa_name == ''){
      let toast = this.toastCtrl.create({
        message: 'Invalid Facebook Username!',
        duration: 3000,
        position: 'bottom'
      });
    toast.present();
    }else{
      let data =this.data.f_name
   let someArray = this.childdetail.filter(function(el) {
   
    return el.f_name !== data;
   
});
console.log("filter22",someArray)

this.childdetail=someArray

// if(this.connectivityService.isOffline()){
  this.childdetail.push({'f_name':this.f_name,'l_name':this.l_name,'m_phone':this.m_phone,'m_email':this.m_email,'c_birth_date':this.c_birth_date,'child_gender':this.child_gender,'fa_name':this.fa_name,'in_name':this.in_name,'sn_name':this.sn_name,'c_r_street':this.c_r_street,'c_r_city':this.c_r_city,'c_r_zip':this.c_r_zip,'c_r_country':this.c_r_country,'c_r_state':this.c_r_state,'child_ethincity':this.child_ethincity})
  let toast = this.toastCtrl.create({
    message: 'Stored in Offline!',
    duration: 3000,
    position: 'bottom'
  });
toast.present();
  this.storage.set('childdetail',this.childdetail);
  this.navCtrl.setRoot(ChilddetailsPage)
// }else{
  this.model={'f_name':this.f_name,'l_name':this.l_name,'m_phone':this.m_phone,'m_email':this.m_email,'c_birth_date':this.c_birth_date,'child_gender':this.child_gender,'fa_name':this.fa_name,'in_name':this.in_name,'sn_name':this.sn_name,'c_r_street':this.c_r_street,'c_r_city':this.c_r_city,'c_r_zip':this.c_r_zip,'c_r_country':this.c_r_country,'c_r_state':this.c_r_state,'child_ethincity':this.child_ethincity}
  // this.http.post('http://localhost:3001/creatUser',this.model,{})
  //   .then(
  //     res => {
  //       console.log(res);
  //     },
  //     err => {
  //       console.log("Error occured");
  //     }
  //   );

//}

        
  }

 
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildinfoeditPagePage');
  }

}

webpackJsonp([0],{

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__childdetails_childdetails__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { ConnectivityProvider } from '../../providers/connectivity/connectivity';



/*
  Generated class for the ChildinfoPage page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ChildinfoPage = (function () {
    function ChildinfoPage(network, toastCtrl, storage, navCtrl, navParams, http) {
        var _this = this;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.hide = false;
        this.f_name = '';
        this.l_name = '';
        this.m_phone = '';
        this.m_email = '';
        this.c_birth_date = '';
        this.child_gender = '';
        this.institution = '';
        this.fa_name = '';
        this.in_name = '';
        this.sn_name = '';
        this.c_r_street = '';
        this.c_r_city = '';
        this.c_r_zip = '';
        this.c_r_country = '';
        this.child_ethincity = '';
        this.c_r_state = '';
        this.childdetail = [];
        this.model = {};
        this.forms = [];
        // watch network for a disconnect
        var disconnectSubscription = this.network.onDisconnect().subscribe(function () {
            console.log('network was disconnected :-(');
        });
        // stop disconnect watch
        disconnectSubscription.unsubscribe();
        // watch network for a connection
        var connectSubscription = this.network.onConnect().subscribe(function () {
            console.log('network connected!');
            // We just got a connection but we need to wait briefly
            // before we determine the connection type. Might need to wait.
            // prior to doing any api requests as well.
            _this.storage.get('childinfo').then(function (val2) {
                console.log("childinfo : " + val2);
                _this.forms = val2;
                if (_this.forms) {
                    var data = _this.forms.map(function (data) {
                        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                        headers.append("Accept", 'application/json');
                        headers.append('Content-Type', 'application/json');
                        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
                        var body = JSON.stringify({ 'f_name': data.f_name, 'l_name': data.l_name, 'm_phone': data.m_phone, 'm_email': data.m_email, 'c_birth_date': data.c_birth_date, 'child_gender': data.child_gender, 'fa_name': data.fa_name, 'in_name': data.in_name, 'sn_name': data.sn_name, 'c_r_street': data.c_r_street, 'c_r_city': data.c_r_city, 'c_r_zip': data.c_r_zip, 'c_r_country': data.c_r_country, 'c_r_state': data.c_r_state, 'child_ethincity': data.child_ethincity });
                        return new Promise(function (resolve) {
                            _this.http.post('https://offline.pinnacleseven.com/api/creatUser', body, options)
                                .subscribe(function (data) {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__childdetails_childdetails__["a" /* ChilddetailsPage */]);
                                var toast = _this.toastCtrl.create({
                                    message: 'Sync Successfully!',
                                    duration: 3000,
                                    position: 'middle'
                                });
                                toast.present();
                                console.log(data['_body']);
                            }, function (error) {
                                console.log(error); // Error getting the data
                            });
                        });
                    });
                    _this.storage.set('childinfo', '');
                }
            });
            setTimeout(function () {
                if (_this.network.type === 'wifi') {
                    console.log('we got a wifi connection, woohoo!');
                    _this.storage.get('childinfo').then(function (val2) {
                        console.log("childinfo : " + val2);
                        _this.forms = val2;
                        if (_this.forms) {
                            var data = _this.forms.map(function (data) {
                                var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                                headers.append("Accept", 'application/json');
                                headers.append('Content-Type', 'application/json');
                                var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
                                var body = JSON.stringify({ 'f_name': data.f_name, 'l_name': data.l_name, 'm_phone': data.m_phone, 'm_email': data.m_email, 'c_birth_date': data.c_birth_date, 'child_gender': data.child_gender, 'fa_name': data.fa_name, 'in_name': data.in_name, 'sn_name': data.sn_name, 'c_r_street': data.c_r_street, 'c_r_city': data.c_r_city, 'c_r_zip': data.c_r_zip, 'c_r_country': data.c_r_country, 'c_r_state': data.c_r_state, 'child_ethincity': data.child_ethincity });
                                return new Promise(function (resolve) {
                                    _this.http.post('https://offline.pinnacleseven.com/api/creatUser', body, options)
                                        .subscribe(function (data) {
                                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__childdetails_childdetails__["a" /* ChilddetailsPage */]);
                                        var toast = _this.toastCtrl.create({
                                            message: 'Sync Successfully!',
                                            duration: 3000,
                                            position: 'middle'
                                        });
                                        toast.present();
                                        console.log(data['_body']);
                                    }, function (error) {
                                        console.log(error); // Error getting the data
                                    });
                                });
                            });
                            _this.storage.set('childinfo', '');
                        }
                    });
                }
            }, 3000);
        });
    }
    ChildinfoPage.prototype.discard = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__childdetails_childdetails__["a" /* ChilddetailsPage */]);
    };
    ChildinfoPage.prototype.address = function () {
        if (this.hide == true) {
            this.hide = false;
        }
        else {
            this.hide = true;
        }
    };
    ChildinfoPage.prototype.submit = function () {
        var _this = this;
        if (this.f_name == '') {
            var toast = this.toastCtrl.create({
                message: 'Invalid First Name!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.l_name == '') {
            var toast = this.toastCtrl.create({
                message: 'Invalid Last Name!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.m_phone == '') {
            var toast = this.toastCtrl.create({
                message: 'Invalid Phone!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else {
            if (this.network.type == "unknown" || this.network.type == "none" || this.network.type == undefined) {
                console.log("offffffffffffffffline");
                var values_1 = [];
                this.storage.get('childinfo').then(function (val2) {
                    console.log("childinfo subcribe data : " + JSON.stringify(val2));
                    values_1 = val2;
                });
                values_1.push({ 'f_name': this.f_name, 'l_name': this.l_name, 'm_phone': this.m_phone, 'm_email': this.m_email, 'c_birth_date': this.c_birth_date, 'child_gender': this.child_gender, 'fa_name': this.fa_name, 'in_name': this.in_name, 'sn_name': this.sn_name, 'c_r_street': this.c_r_street, 'c_r_city': this.c_r_city, 'c_r_zip': this.c_r_zip, 'c_r_country': this.c_r_country, 'c_r_state': this.c_r_state, 'child_ethincity': this.child_ethincity });
                var toast = this.toastCtrl.create({
                    message: 'Stored in Offline!',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
                this.storage.set('childinfo', values_1);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__childdetails_childdetails__["a" /* ChilddetailsPage */]);
            }
            else {
                var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
                headers.append("Accept", 'application/json');
                headers.append('Content-Type', 'application/json');
                var options_1 = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
                var body_1 = JSON.stringify({ 'f_name': this.f_name, 'l_name': this.l_name, 'm_phone': this.m_phone, 'm_email': this.m_email, 'c_birth_date': this.c_birth_date, 'child_gender': this.child_gender, 'fa_name': this.fa_name, 'in_name': this.in_name, 'sn_name': this.sn_name, 'c_r_street': this.c_r_street, 'c_r_city': this.c_r_city, 'c_r_zip': this.c_r_zip, 'c_r_country': this.c_r_country, 'c_r_state': this.c_r_state, 'child_ethincity': this.child_ethincity });
                return new Promise(function (resolve) {
                    _this.http.post('https://offline.pinnacleseven.com/api/creatUser', body_1, options_1)
                        .subscribe(function (data) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__childdetails_childdetails__["a" /* ChilddetailsPage */]);
                        var toast = _this.toastCtrl.create({
                            message: 'Created Successfully!',
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                        console.log(data['_body']);
                    }, function (error) {
                        console.log(error); // Error getting the data
                    });
                });
                //}
            }
        }
    };
    ChildinfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChildinfoPagePage');
    };
    ChildinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-childinfo',template:/*ion-inline-start:"/home/pinnacle/Documents/httpserer/ionic2-http/src/pages/childinfo/childinfo.html"*/`<!--\n  Generated template for the ChildinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Child Information</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color:aliceblue">\n   \n  <ion-list style="box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);margin-top:5%;border: 0.6px solid rgb(109, 112, 167)">\n        <ion-item no-lines>\n          <ion-label style="font-size:13px;color:black;width:50%"item-left ><b>First Name</b></ion-label>\n          <ion-input required style="font-size:13px;color:black;width:50%" item-right type="text" [(ngModel)]="f_name" name="f_name" ></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label style="font-size:13px;color:black;width:50%"item-left ><b>Last Name</b></ion-label>\n            <ion-input style="font-size:13px;color:black;width:50%" item-right type="text" [(ngModel)]="l_name" name="l_name" ></ion-input>\n          </ion-item>\n          <ion-item no-lines>\n              <ion-label style="font-size:13px;color:black;width:50%"item-left ><b>Phone Number</b></ion-label>\n              <ion-input style="font-size:13px;color:black;width:50%" item-right type="number" [(ngModel)]="m_phone" name="m_phone" ></ion-input>\n            </ion-item>\n          <ion-item no-lines>\n              <ion-label style="font-size:13px;color:black;width:50%"item-left ><b>Email Address</b></ion-label>\n              <ion-input style="font-size:13px;color:black;width:50%" item-right type="email" [(ngModel)]="m_email" name="m_email" ></ion-input>\n            </ion-item>\n            <ion-item no-lines>\n                <ion-label style="font-size:13px;color:black;width:30%"item-left ><b>DOB</b></ion-label>\n                <ion-datetime style="font-size:13px;color:black;width:70%" displayFormat="DD/MMM/YYYY" pickerFormat="DD/MMM/YYYY" [(ngModel)]="c_birth_date" name="c_birth_date" ></ion-datetime>\n              </ion-item>\n\n              <ion-item >\n                  <ion-label style="font-size:13px;color:black;width:50%"><b>Gender</b></ion-label>\n                  <ion-select style="font-size:13px;color:black;width:50%;margin-right:6%;" [(ngModel)]="child_gender"> \n                      <ion-option >Female</ion-option>\n                      <ion-option>Male</ion-option>\n                      <ion-option>Undefined</ion-option>\n                </ion-select>\n                  </ion-item >\n\n                  <ion-item >\n                    <ion-label style="font-size:13px;color:black;width:50%"><b>Ethnicity</b></ion-label>\n                    <ion-select style="font-size:13px;color:black;width:50%;margin-right:6%;" [(ngModel)]="child_ethincity"> \n                        <ion-option >Asian</ion-option>\n                        <ion-option>White</ion-option>\n                        <ion-option>Black or African American</ion-option>\n                        <ion-option>Pacific Islander</ion-option>\n                        <ion-option>American Indian</ion-option>\n                        <ion-option>Hispanic or Latino</ion-option>\n                        <ion-option >Some other race</ion-option>\n                        <ion-option >I do not know (mutually exclusive)</ion-option>\n                  </ion-select>\n                    </ion-item >\n\n                  <!-- <ion-item no-lines>\n                      <ion-label style="font-size:13px;color:black;width:50%"item-left ><b>Institution Name</b></ion-label>\n                      <ion-input style="font-size:13px;color:black;width:50%" item-right type="text" [(ngModel)]="institution" name="institution" ></ion-input>\n                    </ion-item> -->\n\n                    <ion-item no-lines>\n                        <ion-label style="font-size:13px;color:black;width:50%"item-left ><b>Facebook Username</b></ion-label>\n                        <ion-input style="font-size:13px;color:black;width:50%" item-right type="text" [(ngModel)]="fa_name" name="fa_name" ></ion-input>\n                      </ion-item>\n\n                      <ion-item no-lines>\n                        <ion-label style="font-size:13px;color:black;width:50%"item-left ><b>Instagram Username</b></ion-label>\n                        <ion-input style="font-size:13px;color:black;width:50%" item-right type="text" [(ngModel)]="in_name" name="in_name" ></ion-input>\n                      </ion-item>\n\n                      <ion-item no-lines>\n                        <ion-label style="font-size:13px;color:black;width:50%"item-left ><b>Snapchat</b></ion-label>\n                        <ion-input style="font-size:13px;color:black;width:50%" item-right type="text" [(ngModel)]="sn_name" name="sn_name" ></ion-input>\n                      </ion-item>\n\n                      <ion-item style="height:14px;background-color:#e0f0fb" no-lines>\n          \n                        <ion-label style="width:50%;color:black;font-size:13px" (click)="address()"> <b>  Address</b></ion-label>\n                        <ion-icon name="create" (click)="address()" item-right  style="font-size:13px"></ion-icon>\n                      </ion-item>\n              \n                      <ion-item *ngIf="hide"  no-lines>\n                        <ion-label style="width:50%;color:black;font-size:13px" item-left><b>Street</b></ion-label>\n                        <ion-input style="text-align:right;width:50%;color:black;font-size:13px" item-right type="text"  [(ngModel)]="c_r_street" name="c_r_street"></ion-input>\n                      </ion-item>\n                     \n                      <ion-item *ngIf="hide"  no-lines>\n                          <ion-label style="width:50%;color:black;font-size:13px" item-left><b>City</b></ion-label>\n                          <ion-input style="text-align:right;width:50%;color:black;font-size:13px" item-right type="text"  [(ngModel)]="c_r_city" name="c_r_city"></ion-input>\n                          </ion-item>\n              \n                          <ion-item *ngIf="hide"  no-lines>\n                            <ion-label style="width:50%;color:black;font-size:13px" item-left><b>State</b></ion-label>\n                            <ion-input  item-right style="text-align:right;width:50%;color:black;font-size:13px" item-right type="text"  [(ngModel)]="c_r_state" name="c_r_state"></ion-input>\n                          </ion-item>\n              \n                      <ion-item *ngIf="hide"  no-lines>\n                          <ion-label style="width:50%;color:black;font-size:13px" item-left><b>Zipcode</b></ion-label>\n                        <ion-input  item-right style="text-align:right;width:50%;color:black;font-size:13px" item-right type="text"  [(ngModel)]="c_r_zip" name="c_r_zip"></ion-input>\n                      </ion-item>\n\n                      <ion-item *ngIf="hide"  no-lines>\n                        <ion-label style="width:50%;color:black;font-size:13px" item-left><b>Country</b></ion-label>\n                      <ion-input  item-right style="text-align:right;width:50%;color:black;font-size:13px" item-right type="text"  [(ngModel)]="c_r_country" name="c_r_country"></ion-input>\n                    </ion-item>\n     \n    </ion-list>\n   \n</ion-content>\n\n\n<ion-footer >\n  \n  <ion-item  no-lines style="height:20px;">\n\n    <button  style="width:40%;background-color:#00276C" item-left ion-button  (click)="submit()">Save</button>\n    <button  style="width:75%;background-color:	#FCB92F" item-right ion-button color="danger" (click)="discard()">Discard</button>\n          \n  </ion-item>\n</ion-footer>`/*ion-inline-end:"/home/pinnacle/Documents/httpserer/ionic2-http/src/pages/childinfo/childinfo.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], ChildinfoPage);
    return ChildinfoPage;
}());

//# sourceMappingURL=childinfo.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildinfoeditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__childdetails_childdetails__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { ConnectivityProvider } from '../../providers/connectivity/connectivity';
/*
  Generated class for the ChildinfoeditPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ChildinfoeditPage = (function () {
    function ChildinfoeditPage(storage, toastCtrl, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.hide = false;
        this.f_name = '';
        this.l_name = '';
        this.m_phone = '';
        this.m_email = '';
        this.c_birth_date = '';
        this.child_gender = '';
        this.institution = '';
        this.fa_name = '';
        this.in_name = '';
        this.sn_name = '';
        this.c_r_street = '';
        this.c_r_city = '';
        this.c_r_zip = '';
        this.c_r_country = '';
        this.child_ethincity = '';
        this.c_r_state = '';
        this.childdetail = [];
        this.model = {};
        this.isenabled = false;
        this.editbutton = true;
        this.deleteing = [];
        this.data = navParams.get('param1');
        console.log("data", this.data);
        this.f_name = this.data.f_name;
        this.l_name = this.data.l_name;
        this.m_phone = this.data.m_phone;
        this.c_birth_date = this.data.c_birth_date;
        this.child_gender = this.data.child_gender;
        this.institution = this.data.institution;
        this.fa_name = this.data.fa_name;
        this.m_email = this.data.m_email;
        this.in_name = this.data.in_name;
        this.sn_name = this.data.sn_name;
        this.c_r_street = this.data.c_r_street;
        this.c_r_city = this.data.c_r_city;
        this.c_r_zip = this.data.c_r_zip;
        this.c_r_country = this.data.c_r_country;
        this.child_ethincity = this.data.child_ethincity;
        this.c_r_state = this.data.c_r_state;
        this.storage.get('childdetail').then(function (val) {
            console.log(" data : " + val);
            if (val == null) {
            }
            else {
                var read = val.map(function (data) {
                    _this.childdetail.push({ 'f_name': data.f_name, 'l_name': data.l_name, 'm_phone': data.m_phone, 'm_email': data.m_email, 'c_birth_date': data.c_birth_date, 'child_gender': data.child_gender, 'fa_name': data.fa_name, 'in_name': data.in_name, 'sn_name': data.sn_name, 'c_r_street': data.c_r_street, 'c_r_city': data.c_r_city, 'c_r_zip': data.c_r_zip, 'c_r_country': data.c_r_country, 'c_r_state': data.c_r_state, 'child_ethincity': data.child_ethincity });
                });
            }
        });
    }
    ChildinfoeditPage.prototype.address = function () {
        if (this.hide == true) {
            this.hide = false;
        }
        else {
            this.hide = true;
        }
    };
    ChildinfoeditPage.prototype.edit = function (item) {
        this.editbutton = false;
        this.isenabled = true;
        //console.log(typeof this.data , this.data)
    };
    ChildinfoeditPage.prototype.discard = function () {
        // this.childdetail.push({'firstname':this.firstname,'lastname':this.lastname,'phone':this.phone,'email':this.email,'dob':this.dob,'gender':this.gender,'institution':this.institution,'fb':this.fb})
        // this.storage.set('childdetail',this.childdetail);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__childdetails_childdetails__["a" /* ChilddetailsPage */]);
    };
    ChildinfoeditPage.prototype.submit = function () {
        if (this.f_name == '') {
            var toast = this.toastCtrl.create({
                message: 'Invalid First Name!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.l_name == '') {
            var toast = this.toastCtrl.create({
                message: 'Invalid Last Name!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.m_phone == '') {
            var toast = this.toastCtrl.create({
                message: 'Invalid Phone!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.m_email == '') {
            var toast = this.toastCtrl.create({
                message: 'Invalid Email!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.c_birth_date == '') {
            var toast = this.toastCtrl.create({
                message: 'Invalid DOB!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.child_gender == '') {
            var toast = this.toastCtrl.create({
                message: 'Invalid Gender!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else if (this.fa_name == '') {
            var toast = this.toastCtrl.create({
                message: 'Invalid Facebook Username!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        }
        else {
            var data_1 = this.data.f_name;
            var someArray = this.childdetail.filter(function (el) {
                return el.f_name !== data_1;
            });
            console.log("filter22", someArray);
            this.childdetail = someArray;
            // if(this.connectivityService.isOffline()){
            this.childdetail.push({ 'f_name': this.f_name, 'l_name': this.l_name, 'm_phone': this.m_phone, 'm_email': this.m_email, 'c_birth_date': this.c_birth_date, 'child_gender': this.child_gender, 'fa_name': this.fa_name, 'in_name': this.in_name, 'sn_name': this.sn_name, 'c_r_street': this.c_r_street, 'c_r_city': this.c_r_city, 'c_r_zip': this.c_r_zip, 'c_r_country': this.c_r_country, 'c_r_state': this.c_r_state, 'child_ethincity': this.child_ethincity });
            var toast = this.toastCtrl.create({
                message: 'Stored in Offline!',
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
            this.storage.set('childdetail', this.childdetail);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__childdetails_childdetails__["a" /* ChilddetailsPage */]);
            // }else{
            this.model = { 'f_name': this.f_name, 'l_name': this.l_name, 'm_phone': this.m_phone, 'm_email': this.m_email, 'c_birth_date': this.c_birth_date, 'child_gender': this.child_gender, 'fa_name': this.fa_name, 'in_name': this.in_name, 'sn_name': this.sn_name, 'c_r_street': this.c_r_street, 'c_r_city': this.c_r_city, 'c_r_zip': this.c_r_zip, 'c_r_country': this.c_r_country, 'c_r_state': this.c_r_state, 'child_ethincity': this.child_ethincity };
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
    };
    ChildinfoeditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChildinfoeditPagePage');
    };
    ChildinfoeditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-childinfoedit',template:/*ion-inline-start:"/home/pinnacle/Documents/httpserer/ionic2-http/src/pages/childinfoedit/childinfoedit.html"*/`<!--\n  Generated template for the ChildinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Child Information</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-color:aliceblue">\n   \n  <ion-list style="box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);margin-top:5%;border: 0.6px solid rgb(109, 112, 167)">\n    <ion-item no-lines>\n      <ion-label style="font-size:13px;color:black;width:50%"item-left ><b>First Name</b></ion-label>\n      <ion-input [disabled]="!isenabled" style="font-size:13px;color:black;width:50%" item-right type="text" [(ngModel)]="f_name" name="f_name" ></ion-input>\n    </ion-item>\n    <ion-item no-lines>\n        <ion-label style="font-size:13px;color:black;width:50%"item-left ><b>Last Name</b></ion-label>\n        <ion-input [disabled]="!isenabled" style="font-size:13px;color:black;width:50%" item-right type="text" [(ngModel)]="l_name" name="l_name" ></ion-input>\n      </ion-item>\n      <ion-item no-lines>\n          <ion-label style="font-size:13px;color:black;width:50%"item-left ><b>Phone Number</b></ion-label>\n          <ion-input [disabled]="!isenabled" style="font-size:13px;color:black;width:50%" item-right type="number" [(ngModel)]="m_phone" name="m_phone" ></ion-input>\n        </ion-item>\n      <ion-item no-lines>\n          <ion-label style="font-size:13px;color:black;width:50%"item-left ><b>Email Address</b></ion-label>\n          <ion-input [disabled]="!isenabled" style="font-size:13px;color:black;width:50%" item-right type="email" [(ngModel)]="m_email" name="m_email" ></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n            <ion-label style="font-size:13px;color:black;width:30%"item-left ><b>DOB</b></ion-label>\n            <ion-datetime [disabled]="!isenabled" style="font-size:13px;color:black;width:70%" displayFormat="DD/MMM/YYYY" pickerFormat="DD/MMM/YYYY" [(ngModel)]="c_birth_date" name="c_birth_date" ></ion-datetime>\n          </ion-item>\n\n          <ion-item >\n              <ion-label style="font-size:13px;color:black;width:50%"><b>Gender</b></ion-label>\n              <ion-select [disabled]="!isenabled" style="font-size:13px;color:black;width:50%;margin-right:6%;" [(ngModel)]="child_gender"> \n                  <ion-option >Female</ion-option>\n                  <ion-option>Male</ion-option>\n                  <ion-option>Undefined</ion-option>\n            </ion-select>\n              </ion-item >\n\n              <ion-item >\n                <ion-label style="font-size:13px;color:black;width:50%"><b>Ethnicity</b></ion-label>\n                <ion-select [disabled]="!isenabled" style="font-size:13px;color:black;width:50%;margin-right:6%;" [(ngModel)]="child_ethincity"> \n                    <ion-option >Asian</ion-option>\n                    <ion-option>White</ion-option>\n                    <ion-option>Black or African American</ion-option>\n                    <ion-option>Pacific Islander</ion-option>\n                    <ion-option>American Indian</ion-option>\n                    <ion-option>Hispanic or Latino</ion-option>\n                    <ion-option >Some other race</ion-option>\n                    <ion-option >I do not know (mutually exclusive)</ion-option>\n              </ion-select>\n                </ion-item >\n\n              <!-- <ion-item no-lines>\n                  <ion-label style="font-size:13px;color:black;width:50%"item-left ><b>Institution Name</b></ion-label>\n                  <ion-input [disabled]="!isenabled" style="font-size:13px;color:black;width:50%" item-right type="text" [(ngModel)]="institution" name="institution" ></ion-input>\n                </ion-item> -->\n\n                <ion-item no-lines>\n                    <ion-label style="font-size:13px;color:black;width:50%"item-left ><b>Facebook Username</b></ion-label>\n                    <ion-input [disabled]="!isenabled" style="font-size:13px;color:black;width:50%" item-right type="text" [(ngModel)]="fa_name" name="fa_name" ></ion-input>\n                  </ion-item>\n\n                  <ion-item no-lines>\n                    <ion-label style="font-size:13px;color:black;width:50%"item-left ><b>Instagram Username</b></ion-label>\n                    <ion-input [disabled]="!isenabled" style="font-size:13px;color:black;width:50%" item-right type="text" [(ngModel)]="in_name" name="in_name" ></ion-input>\n                  </ion-item>\n\n                  <ion-item no-lines>\n                    <ion-label style="font-size:13px;color:black;width:50%"item-left ><b>Snapchat</b></ion-label>\n                    <ion-input [disabled]="!isenabled" style="font-size:13px;color:black;width:50%" item-right type="text" [(ngModel)]="sn_name" name="sn_name" ></ion-input>\n                  </ion-item>\n\n                  <ion-item style="height:14px;background-color:#e0f0fb" no-lines>\n      \n                    <ion-label style="width:50%;color:black;font-size:13px" (click)="address()"> <b>  Address</b></ion-label>\n                    <ion-icon  name="create" (click)="address()" item-right  style="font-size:13px"></ion-icon>\n                  </ion-item>\n          \n                  <ion-item *ngIf="hide"  no-lines>\n                    <ion-label style="width:50%;color:black;font-size:13px" item-left><b>Street</b></ion-label>\n                    <ion-input [disabled]="!isenabled" style="text-align:right;width:50%;color:black;font-size:13px" item-right type="text"  [(ngModel)]="c_r_street" name="c_r_street"></ion-input>\n                  </ion-item>\n                 \n                  <ion-item *ngIf="hide"  no-lines>\n                      <ion-label style="width:50%;color:black;font-size:13px" item-left><b>City</b></ion-label>\n                      <ion-input [disabled]="!isenabled" style="text-align:right;width:50%;color:black;font-size:13px" item-right type="text"  [(ngModel)]="c_r_city" name="c_r_city"></ion-input>\n                      </ion-item>\n          \n                      <ion-item *ngIf="hide"  no-lines>\n                        <ion-label style="width:50%;color:black;font-size:13px" item-left><b>State</b></ion-label>\n                        <ion-input [disabled]="!isenabled"  item-right style="text-align:right;width:50%;color:black;font-size:13px" item-right type="text"  [(ngModel)]="c_r_state" name="c_r_state"></ion-input>\n                      </ion-item>\n          \n                  <ion-item *ngIf="hide"  no-lines>\n                      <ion-label style="width:50%;color:black;font-size:13px" item-left><b>Zipcode</b></ion-label>\n                    <ion-input [disabled]="!isenabled"  item-right style="text-align:right;width:50%;color:black;font-size:13px" item-right type="text"  [(ngModel)]="c_r_zip" name="c_r_zip"></ion-input>\n                  </ion-item>\n\n                  <ion-item *ngIf="hide"  no-lines>\n                    <ion-label style="width:50%;color:black;font-size:13px" item-left><b>Country</b></ion-label>\n                  <ion-input [disabled]="!isenabled"  item-right style="text-align:right;width:50%;color:black;font-size:13px" item-right type="text"  [(ngModel)]="c_r_country" name="c_r_country"></ion-input>\n                </ion-item>\n    </ion-list>\n    \n   \n</ion-content>\n\n\n<!-- <ion-footer >\n   \n  <ion-item *ngIf="editbutton" style="height:20px;">\n    <button  style="width:100%;background-color:#00276C" item-left ion-button  (click)="edit()">Edit</button>\n</ion-item>\n  <ion-item *ngIf="!editbutton" no-lines style="height:20px;">\n\n    <button  style="width:40%;background-color:#00276C" item-left ion-button  (click)="submit()">Save</button>\n    <button  style="width:75%;background-color:	#FCB92F" item-right ion-button color="danger" (click)="discard()">Discard</button>\n          \n  </ion-item>\n</ion-footer> -->`/*ion-inline-end:"/home/pinnacle/Documents/httpserer/ionic2-http/src/pages/childinfoedit/childinfoedit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ChildinfoeditPage);
    return ChildinfoeditPage;
}());

//# sourceMappingURL=childinfoedit.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__childdetails_childdetails__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { OdooRPCService } from 'angular2-odoo-jsonrpc';




var Login = (function () {
    function Login(toastCtrl, network, http, nav, alertCtrl, loadingCtrl, storage) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.network = network;
        this.http = http;
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.dbs = [];
        this.user = { db: "", name: "", password: "" };
        this.hide = false;
        this.pass = "";
        if (this.network.type == "unknown" || this.network.type == "none" || this.network.type == undefined) {
            this.user.name = '';
            this.user.password = '';
        }
        else {
            this.storage.get('uname').then(function (val) {
                console.log("uid : ", val);
                if (val) {
                    _this.user.name = val;
                }
            });
            this.storage.get('password').then(function (val) {
                console.log("uid : ", val);
                if (val) {
                    _this.user.password = val;
                }
            });
        }
    }
    Login.prototype.show = function () {
        if (this.hide == true) {
            this.pass = "text";
        }
        else {
            this.pass = "password";
        }
    };
    Login.prototype.login = function () {
        var _this = this;
        if (this.network.type == "unknown" || this.network.type == "none" || this.network.type == undefined) {
            this.storage.get('uname').then(function (val) {
                console.log("uid : ", val);
                _this.storage.get('password').then(function (val1) {
                    console.log("uid : ", val1);
                    if (_this.user.name == val && _this.user.password == val1) {
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__childdetails_childdetails__["a" /* ChilddetailsPage */]);
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            message: 'Invalid Username && Password!',
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                    }
                });
            });
        }
        else {
            this.showLoading();
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var body = { 'username': this.user.name, 'password': this.user.password };
            this.http.post('https://offline.pinnacleseven.com/api/login', JSON.stringify(body), options).toPromise().then(function (result) {
                console.log("Result", JSON.parse(result['_body']));
                var data = JSON.parse(result['_body']).success;
                if (data == 'done') {
                    _this.storage.set('uname', _this.user.name);
                    _this.storage.set('password', _this.user.password);
                    _this.loading.dismiss();
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__childdetails_childdetails__["a" /* ChilddetailsPage */]);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: 'Invalid Username && Password!',
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                    _this.loading.dismiss();
                }
            }).catch(function (err) {
                console.log("Error", err);
                _this.loading.dismiss();
            });
        }
        //
    };
    Login.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    Login.prototype.showError = function (text) {
        setTimeout(function () {
            // this.loading.dismiss();
        });
        var alert = this.alertCtrl.create({
            title: 'Error ',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/pinnacle/Documents/httpserer/ionic2-http/src/pages/login/login.html"*/`<ion-content id="login" padding>\n    <form (ngSubmit)="login()" #registerForm="ngForm">\n    <!-- <h4 style="text-align: center;font-size:20px;margin-top:175px" >Pinnacle Seven Technologies</h4>\n     <h5 style="text-align: center;font-size:20px">Gateway to Solutions</h5> -->\n     \n          <div style="padding-top:28%;text-align: center;">\n\n            <div style="text-align:center">\n                <img style="width:200px;height:70px;margin-bottom:10px" src="assets/imgs/sfcs.png">\n            </div>\n          \n            <div style="border: double rgba(255,255,255,.1);background-color:#d6dae0">\n              <ion-row>\n                <!-- <ion-col width-20 style="margin-top:11px">\n              <ion-icon style="color:#657CAE;"  name="person"></ion-icon>\n            </ion-col> -->\n            <ion-col width-100>\n              <ion-input style="color:#5390CF;  margin-left: 20%" type="text" placeholder="Username" name="username" [(ngModel)]="user.name" required> </ion-input>\n            </ion-col>\n            </ion-row> \n            </div>\n            \n            <div style="border: double rgba(255,255,255,.1) ;margin-top:7px;background-color:#d6dae0" *ngIf="hide"  >\n              <ion-row>\n                <!-- <ion-col width-20 style="margin-top:11px">\n              <ion-icon style="color:#657CAE;" name="lock"></ion-icon>\n            </ion-col> -->\n            <ion-col width-100>\n              <ion-input style="color:#5390CF;  margin-left: 20%" type="text" placeholder="Password" name="password" [(ngModel)]="user.password" required></ion-input>\n            </ion-col>\n            </ion-row>\n            </div>\n            <div style="border: double rgba(255,255,255,.1);margin-top:7px;background-color:#d6dae0" *ngIf="!hide">\n                <ion-row>\n                  <!-- <ion-col width-20 style="margin-top:11px">\n              <ion-icon style="color:#657CAE;" name="lock"></ion-icon>\n            </ion-col> -->\n            <ion-col width-100>\n                <ion-input style="color:#5390CF; margin-left: 20%" type="password" placeholder="Password" name="password" [(ngModel)]="user.password" required></ion-input>\n              </ion-col>\n              </ion-row>\n              </div>\n            \n            <!-- <div style="border: double rgba(255,255,255,.1);margin-top:5px;background-color:rgba(255,255,255,.1)"> -->\n              <ion-row>\n                <ion-col width-20 style="margin-top:11px;margin-left: -25%;">\n              <ion-checkbox style="color:#ffffff;" name="hide" [(ngModel)]="hide"></ion-checkbox>\n            </ion-col>\n            <ion-col width-80 style="    margin-left: -25%;">\n              <ion-label style="color:#657CAE;float:left;">Show Password</ion-label> \n            </ion-col>\n            </ion-row>  \n            <!-- </div> -->\n          \n\n          <button ion-button style="background-color:#5390CF;margin-top:12px;" full type="submit" [disabled]="!registerForm.form.valid">Login</button>\n        \n      </div>\n    </form>\n</ion-content>`/*ion-inline-end:"/home/pinnacle/Documents/httpserer/ionic2-http/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_childdetails_childdetails__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_childinfo_childinfo__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_childinfoedit_childinfoedit__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_10__pages_childdetails_childdetails__["a" /* ChilddetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_childinfo_childinfo__["a" /* ChildinfoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_childinfoedit_childinfoedit__["a" /* ChildinfoeditPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_10__pages_childdetails_childdetails__["a" /* ChilddetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_childinfo_childinfo__["a" /* ChildinfoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_childinfoedit_childinfoedit__["a" /* ChildinfoeditPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_childdetails_childdetails__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* Login */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.children = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_childdetails_childdetails__["a" /* ChilddetailsPage */]);
    };
    MyApp.prototype.openPage = function (page) {
        if (page.component) {
            this.nav.setRoot(page.component);
        }
        else {
            // Since the component is null, this is the logout option
            // ...
            // logout logic
            // ...
            // redirect to home
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* Login */]);
        }
    };
    MyApp.prototype.goLogin = function () {
        // this.nav.goToRoot(true);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* Login */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/pinnacle/Documents/httpserer/ionic2-http/src/app/app.html"*/`<ion-menu [content]="content">\n    <ion-header style="background-color:black">\n      <ion-toolbar >\n          <div style="background:linear-gradient(to right,white, #5390CF)">\n     \n        <img style="width:100px" src="assets/imgs/sfcs.png">\n        \n      </div>\n      </ion-toolbar>\n    </ion-header>\n  \n    <ion-content style="background:linear-gradient(to right,white, #5390CF);">\n      <ion-list>\n  \n  \n                   <ion-item menuClose ion-item style="background:linear-gradient(to right,white, #5390CF);">\n          \n                      <ion-icon style="font-size:28px" item-left name="contact"></ion-icon>\n                  \n                      <h2 style="font-size:18px;color:black" (click)="children()"><b>Children\'s Details</b></h2>\n                    \n                      </ion-item>\n  \n                  <ion-item menuClose ion-item  style="background:linear-gradient(to right,white, #5390CF);;height:40px"> \n                      <ion-icon style="font-size:25px" name="log-out" item-left></ion-icon>\n                      <h2 style="font-size:18px;color:black" (click)="goLogin()"> <b>Logout</b> </h2>\n                      </ion-item> \n                  \n                </ion-list>\n  \n  \n  \n  \n        \n        \n      \n    </ion-content>\n    \n    \n    \n    \n    \n    \n    <ion-footer>\n      <ion-item no-lines style="height:20px;">\n          <ion-row >\n              <ion-col width-50>\n                  <p style="font-size:10px;text-align:right;margin-top:5px;">Powered by </p>\n                </ion-col>\n                <ion-col width-50>\n        <img style="width:20px;height:20px;text-align:left"  src="assets/imgs/logo.png">\n      \n                </ion-col>\n                </ion-row>\n       \n        \n      </ion-item></ion-footer>\n  \n  </ion-menu>\n  \n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"/home/pinnacle/Documents/httpserer/ionic2-http/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChilddetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__childinfo_childinfo__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__childinfoedit_childinfoedit__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the ChilddetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ChilddetailsPage = (function () {
    function ChilddetailsPage(network, http, storage, navCtrl, navParams) {
        var _this = this;
        this.network = network;
        this.http = http;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.childdetail = [];
        if (this.network.type == "unknown" || this.network.type == "none" || this.network.type == undefined) {
            storage.get('childdetail').then(function (val) {
                console.log(" data : " + JSON.stringify(val));
                if (val == null) {
                }
                else {
                    var read = val.map(function (data) {
                        _this.childdetail.push({ 'f_name': data.f_name, 'l_name': data.l_name, 'm_phone': data.m_phone, 'm_email': data.m_email, 'c_birth_date': data.c_birth_date, 'child_gender': data.child_gender, 'fa_name': data.fa_name, 'in_name': data.in_name, 'sn_name': data.sn_name, 'c_r_street': data.c_r_street, 'c_r_city': data.c_r_city, 'c_r_zip': data.c_r_zip, 'c_r_country': data.c_r_country, 'c_r_state': data.c_r_state, 'child_ethincity': data.child_ethincity });
                    });
                    storage.get('childinfo').then(function (vals) {
                        console.log(" data : " + JSON.stringify(vals));
                        if (vals == null) {
                        }
                        else {
                            var read = vals.map(function (data) {
                                _this.childdetail.push({ 'f_name': data.f_name, 'l_name': data.l_name, 'm_phone': data.m_phone, 'm_email': data.m_email, 'c_birth_date': data.c_birth_date, 'child_gender': data.child_gender, 'fa_name': data.fa_name, 'in_name': data.in_name, 'sn_name': data.sn_name, 'c_r_street': data.c_r_street, 'c_r_city': data.c_r_city, 'c_r_zip': data.c_r_zip, 'c_r_country': data.c_r_country, 'c_r_state': data.c_r_state, 'child_ethincity': data.child_ethincity });
                            });
                        }
                    });
                }
            });
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var body = {
                "getData": true
            };
            this.http.post("https://offline.pinnacleseven.com/api/getDatas", body, options)
                .subscribe(function (data) {
                console.log("sdsdsd", data);
                var ddd = JSON.parse(data['_body']);
                _this.childdetail = ddd;
                _this.storage.set('childdetail', _this.childdetail);
                console.log(JSON.stringify(ddd));
            });
        }
    }
    ChilddetailsPage.prototype.childinfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__childinfo_childinfo__["a" /* ChildinfoPage */]);
    };
    ChilddetailsPage.prototype.formview = function (item) {
        console.log(item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__childinfoedit_childinfoedit__["a" /* ChildinfoeditPage */], { param1: item });
    };
    ChilddetailsPage.prototype.clear = function (item) {
        console.log(typeof item, item);
        console.log(JSON.stringify(this.childdetail));
        var index = this.childdetail.indexOf(item);
        if (index > -1) {
            this.childdetail.splice(index, 1); // works
        }
        console.log("clear" + JSON.stringify(this.childdetail));
        this.storage.set('childdetail', this.childdetail);
        return this.childdetail;
    };
    ChilddetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChilddetailsPagePage');
    };
    ChilddetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-childdetails',template:/*ion-inline-start:"/home/pinnacle/Documents/httpserer/ionic2-http/src/pages/childdetails/childdetails.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title style="color:white">Children\'s Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-color:aliceblue">\n    <ion-fab top right edge>\n        <button ion-fab style="background-color:#a5c567" (click)="childinfo()" ><ion-icon name="add"></ion-icon>\n    </button>\n      </ion-fab>\n      <!-- <ion-list>\n        <ion-item *ngFor="let post of posts">\n          <img [src]="post.data.url" />\n        </ion-item>\n      </ion-list> -->\n      <ion-card  style="width:100%;margin-right:-2px;margin-left:-1px;box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)" *ngFor="let item of childdetail" >\n        <ion-card-header  style="background-color:#d1d8e4;margin-top:-3px;height: 48px;">\n         <ion-row>\n           <ion-col>\n          <p   style="font-size:13px;color:#00276C;margin-left:-4%" ><b>{{item.f_name}} {{item.l_name}}</b></p>\n        </ion-col>\n        <ion-col>\n          <ion-icon  style="color:red;font-size:20px;margin-left: 90%;margin-top: -3%;" (click)="clear(item)" name="remove-circle"></ion-icon>   \n        </ion-col>\n        </ion-row>\n        </ion-card-header>\n       \n        <ion-item (click)=formview(item)  style="background-color:#ffffff;margin-top:-3px">\n          <p style="font-size:13px;color:black" ><b>Phone</b></p>\n          <p   style="font-size:13px;color:black" item-right>{{item.m_phone}}</p>\n        </ion-item>\n  \n        <ion-item (click)=formview(item) style="margin-top:-8px;background-color:#ffffff">\n          <p style="font-size:13px;color:black"><b>Email</b></p>\n          <p  style="font-size:13px;color:black"  item-right>{{item.m_email}}</p>\n        </ion-item>\n     \n        <ion-item (click)=formview(item) style="margin-top:-8px;background-color:#ffffff">\n            <p style="font-size:13px;color:black"><b>Country</b></p>\n            <p  style="font-size:13px;color:black"  item-right>{{item.c_r_country}}</p>\n          </ion-item>\n    \n            \n  \n</ion-card>\n  \n</ion-content>\n<ion-footer>\n  <ion-item no-lines style="height:20px;">\n      <ion-row >\n          <ion-col width-50>\n              <p style="font-size:10px;text-align:right;margin-top:5px;">Powered by </p>\n            </ion-col>\n            <ion-col width-50>\n    <img style="width:20px;height:20px;text-align:left"  src="assets/imgs/logo.png">\n  \n            </ion-col>\n            </ion-row>\n   \n    \n  </ion-item></ion-footer>`/*ion-inline-end:"/home/pinnacle/Documents/httpserer/ionic2-http/src/pages/childdetails/childdetails.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ChilddetailsPage);
    return ChilddetailsPage;
}());

//# sourceMappingURL=childdetails.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map
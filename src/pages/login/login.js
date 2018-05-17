var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { OdooRPCService } from '../OdooRPCServices/OdooRPCService';
import { Page1 } from '../page1/page1';
import { Storage } from '@ionic/storage';
var Login = (function () {
    function Login(nav, odooRPC, alertCtrl, loadingCtrl, storage) {
        this.nav = nav;
        this.odooRPC = odooRPC;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.dbs = [];
        this.user = { db: "", name: "", password: "" };
        this.odooRPC.init({
            odoo_server: "http://erp.pinnacleseven.com",
        });
    }
    Login.prototype.getDb = function () {
        var _this = this;
        this.showLoading();
        this.odooRPC.getDbList().then(function (res) {
            console.log("username" + _this.user.name);
            console.log('login success' + res);
            _this.dbs = res;
            _this.storage.set('name', 'Max');
        }).catch(function (err) {
            console.error('login failed', err);
        });
    };
    Login.prototype.login = function () {
        var _this = this;
        this.showLoading();
        this.odooRPC.login('P72016_testing', this.user.name, this.user.password)
            .then(function (res) {
            console.log('login success' + res);
            _this.showError(JSON.stringify(res));
            _this.storage.set('uname', res.username);
            _this.storage.set('uid', res.uid);
            _this.storage.set('company_id', res.company_id);
            _this.loading.dismiss();
            _this.nav.setRoot(Page1);
        }).catch(function (err) {
            console.error('login failed', err);
            _this.showError(err);
            _this.loading.dismiss();
        });
    };
    Login.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    Login.prototype.showError = function (text) {
        var _this = this;
        setTimeout(function () {
            _this.loading.dismiss();
        });
        var alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    return Login;
}());
Login = __decorate([
    Component({
        selector: 'page-login',
        templateUrl: 'login.html'
    }),
    __metadata("design:paramtypes", [NavController, OdooRPCService, AlertController, LoadingController, Storage])
], Login);
export { Login };
//# sourceMappingURL=login.js.map
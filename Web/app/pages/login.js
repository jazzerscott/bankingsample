"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var user_provider_1 = require('../providers/user-provider');
var LoginComponent = (function () {
    function LoginComponent(_userProvider, _router) {
        this._userProvider = _userProvider;
        this._router = _router;
        this.pageTitle = 'Sign In';
        this.userName = "";
        this.password = "";
    }
    LoginComponent.prototype.onLogIn = function () {
        var _this = this;
        this._userProvider.authenticate(this.userName, this.password).subscribe(function (result) {
            if (result) {
                _this._router.navigate(['']);
            }
            else {
                alert('login failed: todo make this message pretty');
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            template: "\n      <form class=\"form-signin\">\n        <h2 class=\"form-signin-heading\">Please sign in</h2>\n        <label for=\"txtUser\" class=\"sr-only\">User Name</label>\n        <input type=\"text\" id=\"txtUser\" name=\"txtUser\" class=\"form-control\" placeholder=\"User Name\" required=\"\" autofocus=\"\" [(ngModel)]=\"userName\" />\n        <label for=\"txtPassword\" class=\"sr-only\" >Password</label>\n        <input type=\"password\" id=\"txtPassword\" name=\"txtPassword\" class=\"form-control\" placeholder=\"Password\" required=\"\"   [(ngModel)]=\"password\"  />\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"onLogIn()\">Log In</button>\n      </form>\n   "
        }), 
        __metadata('design:paramtypes', [user_provider_1.UserProvider, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.js.map
"use strict";
// class User{
//     public email: string
//     private name: string
//     readonly city: string = 'Lucknow'
//     constructor(email:string, name: string){
//         this.email = email,
//         this.name = name
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this.city = 'Lucknow';
    }
    return User;
}());
var shivam = new User('shivam@gmail.com', 'shivam');
// shivam.name
shivam.email;

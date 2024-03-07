"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: 'shivam',
    email: 'shivamsingh175503@gmail.com',
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "shivam", isPaid: false });
// createUser({name:"shivam", isPaid: false, email:'shivamsingh@gmail.com'}) // showing error
var newUser = { name: "shivam", isPaid: false, email: 'shivamsingh@gmail.com' };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 499 };
}
// type Mystring = string;
function createdUser(user) {
    return { name: '', email: '', isActive: true };
}
createdUser({ name: "shivam", isActive: false, email: 'shivamsingh@gmail.com' });
var myUser = {
    _id: "12345",
    name: "shivam",
    email: "shivamsingh175503@gmail.com",
    isActive: true
};
// myUser._id = "45678"
myUser.name = "Shivam Singh";

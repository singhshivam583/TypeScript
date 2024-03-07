// class User{
//     public email: string
//     private name: string
//     readonly city: string = 'Lucknow'
//     constructor(email:string, name: string){
//         this.email = email,
//         this.name = name
//     }
// }

class User{
    readonly city: string = 'Lucknow'
    constructor(
        public email:string, 
        public name: string
    ){}
}

const shivam = new User('shivam@gmail.com','shivam')
// shivam.name
shivam.email

export{}
const user = {
    name:'shivam',
    email:'shivamsingh175503@gmail.com',
    isActive: true
}

function createUser({name: string, isPaid: boolean}){}

createUser({name:"shivam", isPaid: false})
// createUser({name:"shivam", isPaid: false, email:'shivamsingh@gmail.com'}) // showing error

let newUser = {name:"shivam", isPaid: false, email:'shivamsingh@gmail.com'}
createUser(newUser)


function createCourse():{name:string; price: number}{
    return {name:"reactjs", price: 499}
}

type User ={
    name: string,
    email: string,
    isActive: boolean,
}

// type Mystring = string;

function createdUser(user: User): User{
    return {name:'', email:'',isActive: true}
}

createdUser({name:"shivam", isActive: false, email:'shivamsingh@gmail.com'})

type User1 = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditCard?: number
}

let myUser: User1 = {
    _id: "12345", 
    name:'shivam',
    email:"shivamsingh175503@gmail.com",
    isActive: true
}
// myUser._id = "45678"
myUser.name = "Shivam Singh"

type cardNumber = {
    cardNumber:string,
}

type cardDate={
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
     cvv: number
}



export{}
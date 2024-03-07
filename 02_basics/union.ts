let score: number | string = 35

score = 45

score = '55'

type User = {
    name:string,
    id: number
}

type Admin = {
    username:string,
    age: number
}

let shivam: User | Admin = {name:'shivam', id:69}

shivam = {username:'shivamsingh',  age:28}


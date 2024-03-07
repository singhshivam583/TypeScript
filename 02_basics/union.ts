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

function getDbId(id: number | string){
    console.log(`Db is is: ${id}`)

}
getDbId(3)
getDbId('3')

function getDbId1(id: number | string){
    // id.toLowerCase()
    if(typeof id == 'string'){
        id.toLowerCase()
    }
}
//  Array

const data: number[] = [1,2,3,4]
const data1: string[] = ['1','2','3','4']
// const data2: string[] | number[] | boolean[] = [1,'a',true,false]
const data2: (string | number | boolean)[] = [1,'a',true,false]


let pi:3.14 = 3.14
// pi = 3.145

let seatAllotment: 'aisle' | 'middle' | 'window'
seatAllotment = 'aisle'
// seatAllotment = 'crew'

export{}
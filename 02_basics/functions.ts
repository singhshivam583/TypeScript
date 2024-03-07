function addTwo(num: number): number{
    return num + 2
    // return 'Hello'
}

addTwo(5)

function getUpper(val:string){
    return val.toUpperCase()
}

getUpper("hello world")

function signUp(userName: string, password: string, email?: string){

}

let loginUser = (username:string, email:string, isPaid:boolean) => {

}

// function getValue(myVal:number): boolean{
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }


const getHello = (name: string): string => `Hello ${name}`;

const heroes = ['thor', 'spiderman', 'ironman']
// const heroes = [1,2,3,4]


heroes.map((hero): string => {
    return  `${hero} is the best`
})

function consoleError(errMsg: string): void{
    console.log(errMsg);
    // return 'Hello'
}

function handleError(errMsg: string): never{
    throw new Error(errMsg)
}

export{}
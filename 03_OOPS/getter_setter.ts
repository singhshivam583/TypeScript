class User{

    protected _courseCount = 1
    readonly city: string = 'Lucknow'
    constructor(
        public email:string, 
        public name: string
    ){}

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number{
        return this._courseCount 
    }
    
    private deleteToken(){

    }
    
    set courseCount(courseNum){
        if(courseNum <= 1){
            throw new Error('Course count should be more than 1')
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User{
    isFamily: boolean = true
    chnageCourseCount(){
        this._courseCount = 4
    }
}

const shivam = new User('shivam@gmail.com','shivam')
// shivam.name
shivam.email

export{}
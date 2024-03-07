function detectType(val: number | string){
    if(typeof val === 'string'){
        return val.toLowerCase()
    }
    return val + 3
}

function provideId(id:string | null){
    if(!id){
        console.log("Please provide ID")
        return
    }
    id.toLowerCase()
}

function printAll(stars: string | string[] | null){
    if(stars){
        if(typeof stars === 'object'){
            for(const s of stars){
                console.log(s)
            }
        }
        else if(typeof stars === 'string'){
            console.log(stars)
        }
    }
}
function logValue(x:Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString())
    }
    else{
        console.log(x.toUpperCase())
    }
}

type Fish = {swim: () => void}
type Bird = {fly: () => void}

function isFish(pet: Fish | Bird){
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "fish food"
    }else {
        pet
        return 'bird food'
    }
}


interface Circle {
    kind: "circle"
    radius: number 
}

interface Square{
    kind: "square"
    side: number
}

interface Rectangle{
    kind: "rectangle"
    length: number
    bredth: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
    if(shape.kind === 'circle'){
        return Math.PI*shape.radius**2
    }
    else if(shape.kind === 'square'){
        return shape.side*shape.side
    }
    return shape.length*shape.bredth
} 

function getArea(shape:Shape){
    switch(shape.kind){
        case 'circle':
            return Math.PI* shape.radius ** 2
        
        case 'square':
            return shape.side*shape.side;
        case 'square':
            return shape.side*shape.side;
        
        case 'rectangle':
            return shape.length*shape.bredth;
        
        default:
            const _defaultForShape:  never = shape
            return _defaultForShape
    }
}


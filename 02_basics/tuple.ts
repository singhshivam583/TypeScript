// const user : (string | number)[] = ['shivam', 1]
let tUser : [string, number, boolean]

// tUser = [true, 'shivam', 1234]  // order of the data matters here. Typescript is strict about the order
tUser = ['shivam', 12345, true]

let rgb:[number, number, number]
rgb = [255, 255, 255]

type User = [number, string]
const newUser : User = [987654321, "Shivam"]

newUser[1] = 'shivam singh'

// newUser.push(true)

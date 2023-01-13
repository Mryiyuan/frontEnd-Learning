console.log('Hello ts')
let age: number = 9
console.log(age)

let numbers:number[] = [1,3,5]
let numbers1:string[] = ['1','3','5']
let numbers2:Array<number> = [1,3,5]
let numbers3:boolean[] = [true, false]
let arr:(number|string)[]=[1,'fk','kf']
type lcc = (number|string)[]
let lcc = [1,'fk','kf']

function add(num1:number,num2:number):number{
    return num1+num2
}
console.log(add(1,2))

const add1=(num1:number,num2:number):number=>{
    return num1+num2
}
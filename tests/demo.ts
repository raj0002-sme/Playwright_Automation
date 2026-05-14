import { Locator, type Page } from "@playwright/test";

let name1 :string = "sumit";
let age : number = 30;

let bool :boolean = false;

let city :any = "mumbai";      //  if you are not sure about data type then you can provide any

let state: string[] =['patna', 'delhi', 'mumbai']
let marks :number[] = [58, 68,97,55]
console.log("this is marks data "+marks)

let pin : any[] =['30',50, 88,77];   //here it wornt foce you for data type value
console.log("this is pin data "+pin)

// function in type script

function add (a:number,b:number){  // withou return type
    let c= a+b;
    console.log(c);
}

function concat_value(a:string, b:number):string
{
    console.log(a+b);
    return a+b;

}
concat_value('sumit',20);


// Object creation 
let data :{name:string,age:number} = {name:'sumit', age:30};
console.log(data.name);

// calss and constractor
class LoginPage{
    page:Page;
    username :Locator;
    password :Locator;

    constructor(page:any){
        this.page = page;
        this.username = page.locator("<Locar>");
        this.password = page.locator("<locator>");

    }
}


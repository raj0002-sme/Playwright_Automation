var name1 = "sumit";
var age = 30;
var bool = false;
var city = "mumbai"; //  if you are not sure about data type then you can provide any
var state = ['patna', 'delhi', 'mumbai'];
var marks = [58, 68, 97, 55];
console.log("this is marks data " + marks);
var pin = ['30', 50, 88, 77]; //here it wornt foce you for data type value
console.log("this is pin data " + pin);
// function in type script
function add(a, b) {
    var c = a + b;
    console.log(c);
}
function concat_value(a, b) {
    console.log(a + b);
    return a + b;
}
concat_value('sumit', 20);
// Object creation 
var data = { name: 'sumit', age: 30 };
console.log(data.name);

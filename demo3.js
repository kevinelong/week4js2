//Return two or more values

function swap(a, b){
    return [b, a]; //return inside an array
}
list = swap(1, 2)
console.log(list)

// a = list[0]
// b = list[1]
// console.log(a, b)

//using an object
function aged_person(first, last, age){
    age++; //increment
    return {first:first, last:last, age:age}
}
let p = aged_person("Kevin", "Long", 55);
console.log(p);
let age = p.age;
console.log(age)


// Data types - Collections - Arrays and Objects

// Array ordered list

students = ["larry", "moe", "curly", "schlep", "john"]
ages = [55, 21, 21, 22, 22, 30, 19]

// FOR LOOP - CLASSIC/TRADITIONAL

//for(start index/offset, stop expression, how - increment index){}
for(i = 0; i < ages.length; i++){
    console.log(i, ages[i])
}

// objects have properties (key-words->values) like a word->def in dictionary dict
person = { name: "Kevin", color: "black", age: 55 };

studentList = [
    {
        name: "Larry",
        age: 30
    },
    {
        name: "Moe",
        age: 31
    },
    {
        name: "Curly",
        age: 32
    }
]; 

console.log(studentList[0].age);

for(i = 0; i < studentList.length; i++){
    console.log(i, studentList[i].name)
}

console.log("DONE")

text = "ABC"

console.log(text[0])
for(i = 0; i < text.length; i++){
    console.log(i, text[i])
}

function doIt(list=[]){
    output = [];
    //...
    return output;
}

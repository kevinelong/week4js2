
d = new Date()
t = d.toString() //Tue May 02 2023 12:50:05 GMT-0700 (Pacific Daylight Time)
console.log(t)
//Month only?
firstIndex = t.indexOf(" ");
secondIndex = t.indexOf(" ", firstIndex + 1);
console.log(firstIndex, secondIndex)
month = t.substring(firstIndex + 1, secondIndex);
console.log(month)
////////
parts = t.split(" "); // create array/list
console.log(parts);
m = parts[1] //second part/word accesed by index
console.log(m);
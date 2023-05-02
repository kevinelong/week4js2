
d = new Date() //Create a new date object and store in variable d
console.log(d.getTime()) // Epoch ms since 1970
console.log(d)// implied .toString
console.log(d.toLocaleString()) //cultural local version
console.log(d.toISOString()) //Industry Standards Organization
console.log(d.toUTCString()) //Universal Time Code
console.log(d.toString()) //explicit .toString

d2 = new Date() //Create a new date object and store in variable d
console.log(d2.getTime()) // Epoch ms since 1970
console.log("Elapsed ms", d2.getTime() - d.getTime())
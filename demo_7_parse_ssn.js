
ssn = "111-222-4444"
console.log(ssn.substring(5,8))
console.log(ssn.substring(4,7))

first = ssn.indexOf("-")
second = ssn.indexOf("-", first + 1)
console.log(first, second)
console.log(ssn.substring(first + 1, second))

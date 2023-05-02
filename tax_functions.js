function getFederalTax(gross, code){
    
    let rate = 0.23; //Default for Zero
    
    if(code === 1){ 
        rate = 0.21
    }else if(code ===2){
        rate = 0.195
    }else if(code === 3){
        rate = 0.185
    }else if(code >= 4){
        rate = 0.18 - (.005 * (code - 4))
    }

    console.log(rate);
    return rate * gross
}

// console.log("Person 1, Gross pay $750, withholdingcode: 0, tax:", getFederalTax(750, 0))
// console.log("Person 2, Gross pay $1550, withholdingcode: 2, tax:", getFederalTax(1550, 2))
// console.log("Person 3, Gross pay $1100, withholdingcode: 6, tax:", getFederalTax(1100, 6))

function displayTax(name, gross, code){
    console.log(`${name}, Gross pay $${gross}, withholdingcode: ${code}, tax:`, getFederalTax(gross, code))
}

displayTax("Person 1", 750, 0)
displayTax("Person 2", 1550, 2)
displayTax("Person 3", 1100, 6)

// == same value, === same value and same data type 
console.log("123" == 123); //true
console.log("123" === 123); //false
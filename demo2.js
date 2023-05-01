
function displayMailingLabel(name, addr1, city, state, zip){
    // console.log(name);
    // console.log(addr1);
    // console.log(city + ", " + state + " " + zip);
    // console.log(""); // blank line at the end
    console.log(`
${ name }
${ addr1 }
${ city }, ${ state } ${ zip }`);
}

displayMailingLabel("Kevin", "123 Nowhere ST", "Portland", "OR", "97220");
displayMailingLabel("Nina", "ABC Ave", "Seattle", "WA", "20606");

thirdName = "Dandy"
displayMailingLabel(thirdName, "ABC Ave", "Seattle", "WA", "20606");

console.log("\"Reality\" is the only word,\n\r that should always be used in quotes.")
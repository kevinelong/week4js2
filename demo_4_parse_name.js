
//indexOf
//substring
//Parsing
"use strict";
function showName(name){
    let output = "";
    const SPACE = " ";
    const indexFirstSpace = name.indexOf(SPACE)
    if(indexFirstSpace === -1){
        output = name; //only one so use it all
    }else{
        const indexSecondSpace = name.indexOf(SPACE, indexFirstSpace+1);
        if(indexSecondSpace === - 1){ //Only Two words
            const part1 = name.substring(0,indexFirstSpace)
            const part2 = name.substring(indexFirstSpace + 1)
            output = `${part2}, ${part1}`;
        }else{ //three
            const indexThirdSpace = name.indexOf(SPACE, indexSecondSpace+1);
            const part1 = name.substring(0, indexFirstSpace)
            const part2 = name.substring(indexFirstSpace+1, indexSecondSpace)
            const part3 = name.substring(indexSecondSpace + 1)
            output = `${part3}, ${part1} ${part2}`;
        }
    }
    return output;
}

//NO MORE THAN THREE
console.log(showName("Madonna"))
console.log(showName("Nina Marie"))
console.log(showName("Kevin Ernest Long"))

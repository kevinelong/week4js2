document.addEventListener("DOMContentLoaded", () => {

    const date = document.getElementById("date");
    const button = document.getElementById("button");
    const output = document.getElementById("output");

    button.addEventListener("click", () => {
        //...
        output.innerHTML = date.value;
    });// end click

});//end dom content loaded
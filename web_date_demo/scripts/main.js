document.addEventListener("DOMContentLoaded", ()=>{

    const date_input = document.getElementById("date_input");
    const go_button = document.getElementById("go_button");
    const data_output = document.getElementById("data_output");

    go_button.addEventListener("click", ()=>{
        const value = date_input.value;
        let d = new Date(value);
        data_output.innerHTML = getMonthName(d);
    });// end button click

});//end DOMContentLoaded
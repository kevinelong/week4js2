document.addEventListener("DOMContentLoaded", ()=>{

    const date_input = document.getElementById("date_input");
    const go_button = document.getElementById("go_button");
    const data_output = document.getElementById("data_output");
    
    const DAY_MS = 1000 * 60 * 60 * 24;

    go_button.addEventListener("click", ()=>{
        let d = new Date(date_input.value);
        let now = new Date();
        let difference = d.getTime() - now.getTime();
        let days = Math.ceil(difference / DAY_MS);
        data_output.innerHTML = `Your vacation is in ${days} days.`;
    });// end button click

});//end DOMContentLoaded
function getMonthName(date){
    const months = [
        "January", 
        "February", 
        "March", 
        "April",
        "May", 
        "June", 
        "July", 
        "August", 
        "September",
        "October", 
        "November", 
        "December"
    ];
    const index = date.getMonth(); // 0-11
    return months[index];
}
//TEST
// let d = new Date();
// console.log( getMonthName(d) );
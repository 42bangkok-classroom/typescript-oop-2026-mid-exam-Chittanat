// Write your code below
const input:number = Number(process.argv[2]);
if (!input || input < 0 ||input > 100){
        console.log("Invalid input")
       

}else if(input <=49) {
    console.log("Grade is F")
}else if(input <=59) {
    console.log("Grade is D")
}else if(input <=69) {
    console.log("Grade is C")
}else if(input <=79) {
    console.log("Grade is B")
}else {
    console.log("Grade is A")
}


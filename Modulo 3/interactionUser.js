let width;
let height;
let length;
let validInput = false;

while(!validInput){
    width = prompt("What is the width?", "10");
    height = prompt("What is the height?", "20");
    length = prompt("What is the length?", "30");
    validInput = !isNaN(width) && !isNaN(height) && !isNaN(length);
    console.log(validInput);
}
alert("Volume: " + width * height * length);
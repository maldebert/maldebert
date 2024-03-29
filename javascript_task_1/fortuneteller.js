let motherName = prompt("What's your mother's first name?");
let street = prompt("What street did you grow up on?");
let color = prompt("What was your favorite color as a child?");
let age = parseInt(prompt("How old are you?"));
let number = parseInt(prompt("Give me a number between 1 and 10."));

let bestFriend = motherName + " " + street;

let years = age + number;
let children = age % number;
let hair = Math.round(age / number);

alert(
  "In " +
    number +
    " years, you are going to meet your best friend " +
    bestFriend +
    ". You will get married in " +
    years +
    " years and have " +
    children +
    " children. In " +
    hair +
    " years, you are going to dye your hair " +
    color +
    "."
);

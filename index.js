let answer = random (1,10);
let done = false;
while (!done) {
    let guess = prompt("there is a bomb in the basement of this bilding. to defuse it you must gess a number between 1 and 10. good luck agent ");
alert ("good luck!");
    if (guess < answer) {
        alert("go up and hurry!");
    }
    else if (guess > answer) {
        alert("go down and hurry!");
    }
    else {
        alert("good work agent");
        done = true;
    }
} 
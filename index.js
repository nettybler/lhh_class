let answer = random (1,10);
let done = false;
while (!done) {
    let guess = prompt("Enter a number between 1 and 10");
alert ("good luck!");
    if (guess < answer) {
        alert("go up!");
    }
    else if (guess > answer) {
        alert("go down!");
    }
    else {
        alert("You got it!");
        done = true;
    }
}
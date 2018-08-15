var score = document.getElementById("score");
var score2 = document.getElementById("score2");

var button = document.getElementById("button");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var sum = 0;
var sum2 = 0;
function count(){
    sum += 1;

    score.innerHTML = "Score: " + sum;
}

function count2(){
    sum2 += 1;

    score2.innerHTML = "Score: " + sum2;
}

function reset(){
    sum = 0;
    sum2 = 0;

    score.innerHTML = "Score: " + sum;
    score2.innerHTML = "Score: " + sum2;
}

if(sum === 5 || sum2 === 5){
    button.setAttribute("disabled", "disabled");
    button2.setAttribute("disabled", "disabled");
}

button.addEventListener("click", count);
button2.addEventListener("click", count2);
button3.addEventListener("click", reset);

/*

Step 1:
Complete

Step 2:
Complete

Extra Credit:
Remember to check for the winning conditions INSIDE of your event functions.

From Kenn
*/
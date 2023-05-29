function add(){
    var num1, num2, sum;
    num1=parseInt(document.getElementById("first").value);
    num2=parseInt(document.getElementById("second").value);
    sum = num1 + num2;
    document.getElementById("ans").value=sum;   
}

//Reverse string 
let reverseBtn= document.getElementById("button");
function reverseString() {
let inputString= document.querySelector("#string");

    console.log(inputString);
    console.log(inputString.value);
    var a= inputString.value.split("").reverse().join("");
    document.getElementById("reverse").value= a;
    }
    reverseBtn.addEventListener("click", reverseString)


//clock
function startTime(){
   const d = new Date();
   let hour =zero(d.getHours());
   let minute = zero(d.getMinutes());
   let second =zero(d.getSeconds());
document.getElementById("hour").innerHTML = hour;
document.getElementById("min").innerHTML = minute;
document.getElementById("sec").innerHTML = second;

setTimeout(startTime,1000);
}
function zero(i){
    if(i<10)
    {i="0"+i}
    return i;
}

//quotegenrator
let quoteContainer = document.querySelector("#quoteSection");
let generateBtn = document.querySelector("#btn");
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

function acquireQuote(){
    fetch(url)
    .then((info)=> info.json())
    .then((item)=>{
     quoteContainer.textContent =`${item.joke}`;
    });
    
}
generateBtn.addEventListener("click", acquireQuote);

acquireQuote();


//timer
let watchBox=document.getElementsByClassName("watchBox")
let startBtn=document.getElementById("start")
let stopBtn=document.getElementById("stop")
let resetBtn=document.getElementById("reset")
let hour=00, minute=00, second=00;
startBtn.addEventListener("click",function(){
    timer = true;
    stopWtch();
});
stopBtn.addEventListener("click", function(){
    timer = false;
});
resetBtn.addEventListener("click",function(){
    timer=false;
    hour=0;
    minute=0;
    second=0;
    document.getElementById('hours').innerHTML = "00";
    document.getElementById('minutes').innerHTML = "00";
    document.getElementById('seconds').innerHTML = "00";
})
function stopWtch(){
    if(timer){
        
        second = second +1;
        if(second == 60){
            minute++;
            second = 0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
            second = 0;
        }
        let hr = hour;
        let min = minute;
        let sec = second;
        
        if(hour<10){
            hr = "0" + hr;
        }
        if(minute<10){
            min ="0" + min;
        }
        if(second<10){
            sec ="0" + sec;
        }
        document.getElementById('hours').innerHTML = hr;
        document.getElementById('minutes').innerHTML = min;
        document.getElementById('seconds').innerHTML = sec;
        

        setTimeout(stopWtch,100);
    
    }
    
}
// function validateUserName(){


// let e = document.getElementById("user").value;

//     if(e.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
//         document.getElementById("emailid").style.color="green";  
//     }else{
//         document.getElementById("emailid").style.color="red";
//     }
// }
//let email = document.getElementById("emailid").value;
// let error = document.getElementById("error").value;
// function ValidateEmail() {
//   //dont understand
//     if (emailid.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
//         error.innerHTML="";
//         document.getElementById("emailid").style.borderColor="green";
//         return true;
//     } else {
//         error.innerHTML="please enter a valid email";
//         return false;
//     }
//   }

let x = Math.floor((Math.random() * 8) + 1);
let count=1;
document.getElementById("check").onclick=function(){
    var userGuess= document.getElementById("guess").value;
    if(userGuess==x){
       document.getElementById("result").innerHTML="CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN"+ count + "GUESS";
    }
    else if(userGuess>x){
        count++;
        document.getElementById("result").innerHTML="OOPS SORRY!! TRY A SMALLER NUMBER";
    }else{
        count++;
        document.getElementById("result").innerHTML="OOPS SORRY!! TRY A GREATER NUMBER";

    }
}
  

var id1 = document.getElementById("1");
var id2 = document.getElementById("2");
var id3 = document.getElementById("3");
var id4 = document.getElementById("4");
var id5 = document.getElementById("5");
var id6 = document.getElementById("6");
var id7 = document.getElementById("7");
var id8 = document.getElementById("8");
var id9 = document.getElementById("9");
var score = document.getElementById("score")
var count1=0;
// setInterval(function(){
//     var random=(Math.floor(Math.random()*8)+1)
//     var mole = "id"+ random
//     var plant=document.getElementById(mole).classList
//     plant.add("animate")
//     setTimeout(function(){
//     var plant=document.getElementById(mole).classList
//         plant.remove("animate")
//         console.log(plant)
//     },1000)
//     plant.onclick=function(){
//         count++;
//         score.innerText = count
//     }
// },1000)

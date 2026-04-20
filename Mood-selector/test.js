// function isEvenOdd(num){
//     if(num %2 == 0){
//         return "Even";
//     }
//     else{
//         return "Odd";
//     }
// }

// let num1 = 10;
// let num2 = 15;
// let num3 = 22;

// console.log(num1 + " is " + isEvenOdd(num1));
// console.log(num2 + " is " + isEvenOdd(num2));
// console.log(num3 + " is " + isEvenOdd(num3));

let moods = ["😄 Happy", "😴 Tired", "🔥 Productive", "😎 Chill"];
function showMoods(){
    let message = document.getElementById("special-button");
    message.innerHTML = moods[Math.floor(Math.random() * moods.length)];
}
let button=document.querySelector(".other-button");
let test =document.querySelector(".active");
let prog=document.querySelectorAll(".the-progress span")
let section=document.querySelector(".our-skills")
button.addEventListener("click", ()=>{
    if(test.className==="active"){
        test.className="mega-menu"
    }
    else{
        test.className="active"
        
    }
});
window.onscroll = function () {
    if (this.scrollY >= section.offsetTop - 240) {
        prog.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};
// The End Of The Year Date To Countdown To
// 1000 milliseconds = 1 Second
let div =document.querySelector(".time")
let unit =document.querySelector(".unit")
let countDownDate = new Date("Dec 31, 2023 24:00:00").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);


let sectionTwo=document.querySelector(".stats");
let numbers=document.querySelectorAll(".box .number")

let start=false

window.onscroll = function () {
    if (this.scrollY >= sectionTwo.offsetTop - 500) {
        if(!start){
        numbers.forEach((num) => startCount(num))
        }
        start=true
    }
}
function startCount(el){
    let goal = el.dataset.goal;
    let count =setInterval(() => {
        el.textContent++
        if(el.textContent == goal){
            clearInterval(count)
        }
    }, 2000 / goal);
}


document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");
  
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");
  
      question.addEventListener("click", function () {
        const currentlyActive = document.querySelector(".faq-item.active");
        if (currentlyActive && currentlyActive !== item) {
          currentlyActive.classList.remove("active");
          currentlyActive.querySelector(".faq-answer").style.display = "none";
        }
  
        if (item.classList.contains("active")) {
          answer.style.display = "none";
          item.classList.remove("active");
        } else {
          answer.style.display = "block";
          item.classList.add("active");
        }
      });
    });
  });
  // date&time
//   const eventDate = new Date(new Date().getFullYear(), 9, 20).getTime(); // October is month 9 in JavaScript (0-based indexing)

// function updateCountdown() {
//     const now = new Date().getTime();
//     const timeLeft = eventDate - now;

//     if (timeLeft > 0) {
//         // Calculate time left
//         const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//         // Display the result
//         document.getElementById("timeLeft").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

//     } else {
//         // If the event date has passed
//         document.getElementById("timeLeft").innerHTML = "The event has started!";
//     }
// }

// // Update countdown every 1 second
// setInterval(updateCountdown, 1000);
var countDownDate = new Date("Jan 30,2025 00:00:00:00").getTime();
var x=setInterval(function(){
  var now = new Date().getTime();
  var distance = countDownDate-now;

  var days= Math.floor(distance / (1000 * 60 * 60 * 24 ));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("days").innerHTML=days;
  document.getElementById("hours").innerHTML=hours;
  document.getElementById("minutes").innerHTML=minutes;
  document.getElementById("seconds").innerHTML=seconds;
},1000);
let scrollContainer=document.querySelector(".domains");
        let backbtn=document.getElementById("backbtn");
        let nextbtn=document.getElementById("nextbtn");
        scrollContainer.addEventListener("wheel",(evt)=>{
            evt.preventDefault();
            scrollContainer.scrollLeft+=evt.deltaY;
        });
        nextbtn.addEventListener("click",()=>{
            scrollContainer.style.scrollBehavior="smooth";
            scrollContainer.scrollLeft+=250;
        });
        backbtn.addEventListener("click",()=>{
            scrollContainer.style.scrollBehavior="smooth";
            scrollContainer.scrollLeft-=250;
        });


function toggleMenu() {
  document.getElementById("myTopnav").classList.toggle("active");
}
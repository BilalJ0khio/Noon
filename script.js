var mainSection = document.getElementById("main-sec");
var mobileCard = document.getElementById("card-o");
var darkScreen = document.getElementById("dark-screen");
var mobileTime = document.getElementById("timee");
console.log(mobileTime);

mobileCard.addEventListener("click", () => {
  mainSection.classList.toggle("up-content");
  darkScreen.classList.toggle("dark-off");
  mobileTime.classList.toggle("time-none");
});

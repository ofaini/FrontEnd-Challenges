const mainContainer = document.querySelector(".main-container");
const thankContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () =>{
    thankContainer.classList.remove('hidden');
    mainContainer.classList.add('hidden');
})

rateAgain.addEventListener("click", ()=>{
    thankContainer.classList.add('hidden');
    mainContainer.classList.remove('hidden');
    rating.innerHTML = 5;
})

rates.forEach( e =>{
    e.addEventListener("click", () => {
        //console.log(e.innerHTML)
        rating.innerHTML = e.innerHTML;
    })
})
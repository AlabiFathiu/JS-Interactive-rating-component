let mainContainer = document.querySelector('.main-container');
let submitButton = document.getElementById('submit');
let rateAgain = document.getElementById('rate');
let thankYou = document.getElementById('thank-you');
let buttonClicked = document.querySelectorAll('.btn');
let rattings = document.getElementById('rate-input');

submitButton.addEventListener('click', submitRating);

function submitRating () {
    thankYou.classList.remove('hidden');
    mainContainer.style.display= 'none';

    
    
}

rateAgain.addEventListener('click', rateAgainClicked)

function rateAgainClicked () {
    thankYou.classList.add('hidden')
    mainContainer.style.display = 'block'
}

buttonClicked.forEach(function (buttonPicked) {
    buttonPicked.addEventListener('click', () => {
        rattings.innerHTML = buttonPicked.innerHTML;
    })
})
const form = document.querySelector('form');
const formTextarea = document.querySelector('#form__textarea');
const timelineDiv = document.querySelector('#timeline');
const counterCharacters = document.querySelector('.counterCharacters');


counterCharacters.textContent = formTextarea.value.length;

function deleteTweetListener(tweet) {
 const deleteBtn = document.querySelector('#deleteBtn');
 deleteBtn.addEventListener("click", event => {
     timelineDiv.removeChild(tweet);
 })
}

form.addEventListener('submit', event => {
    event.preventDefault();
    if (formTextarea.value.length < 10) {
        let newTweet =  document.createElement("div");
        newTweet.className = "timeline__tweet";
        newTweet.innerHTML = `${formTextarea.value}<button id='deleteBtn'>delete</button>`;
        timelineDiv.prepend(newTweet);
        deleteTweetListener(newTweet);
        formTextarea.value = '';
    }
});

formTextarea.addEventListener('keyup', () => {
    counterCharacters.textContent = event.target.value.length;
    if (event.target.value.length >= 10) {
        counterCharacters.style.backgroundColor = 'red';
    } else {
        counterCharacters.style.backgroundColor = '';

    }
});
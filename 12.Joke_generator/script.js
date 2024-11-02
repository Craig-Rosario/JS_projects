

const joke = document.querySelector('#JokeText');
const btn = document.querySelector('#btn');
const url = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Spooky?type=single";

let getJoke = () => {
    fetch(url)
        .then(data => data.json())
        .then(item => {
            joke.textContent= `${item.joke}`;
        });
};



btn.addEventListener('click',function(){
    joke.textContent="";
    getJoke();
},30000)
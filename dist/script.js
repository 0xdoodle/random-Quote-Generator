const generate = document.querySelector('#generate');
const newQuote = document.querySelector('#newQuote');
const quote = document.querySelector('#quote');
const primary = document.querySelector('#primary-card');
const secondary = document.querySelector('#secondary-card');
const minimise =document.querySelector('#minimise');
const tweet = document.querySelector('#tweet');


const quotes = [`"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful." - Albert Schweitzer`, `"Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover." - Mark Twain`, `"Don't cry because it's over, smile because it happened." - Dr. Seuss`, `"Life is really simple, but we insist on making it complicated." - Confucius`, `"You can never cross the ocean until you have the courage to lose sight of the shore." - Christopher Columbus`, `"The greatest glory in living lies not in never falling, but in rising every time we fall." - Nelson Mandela`, `"Our greatest glory is not in never falling, but in rising every time we fall." - Confucius`, `"You have within you right now, everything you need to deal with whatever the world can throw at you." - Brian Tracy`, `"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt`, `"The only way to do great work is to love what you do." - Steve Jobs`]



newQuote.addEventListener('click', function(){
    const random = Math.floor(Math.random()*quotes.length);
    quote.textContent = quotes[random];
});


generate.addEventListener('click', function(){
    primary.classList.add('hidden');
    secondary.classList.remove('hidden');
    minimise.classList.remove('hidden');
})

minimise.addEventListener('click', function(){
    primary.classList.remove('hidden');
    secondary.classList.add('hidden');
    minimise.classList.add('hidden');
})


tweet.addEventListener('click', function(){
    window.open(`https://twitter.com/intent/tweet?text=${quote.textContent}`,'','height=300px,width=500px,left=200px,top=300px');
    //window.open('url','_blank/_parent','position: width='in px', height= 'in px', left= 'in px', top= 'in px')
})




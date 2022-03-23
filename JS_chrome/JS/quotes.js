const quotes = [
    {
        quote: "I never dreamed about success, I worked for it.\n",
        author: "-Estee Lauder",
    },
        {
        quote: "Do not try to be original, just try to be good.\n",
        author: "-Paul Rand",
    },
    {
        quote: "Do not be afraid to give up the good to go for the great.\n",
        author: "-John D.Rockefeller",
    },
    {
        quote: "The greatest weakness of all weaknesses is to fear too much to appear weak.\n",
        author: "-Bossuet",
    },
    {
        quote: "A man who doesn't trust himself can never truly trust anyone else.\n",
        author: "-Cardinal de Retz",
    },
    {
        quote: "Happiness depends upon ourselves.\n",
        author: "-Aristotle",
    },
    {
        quote: "The most wasted of all days is one without laughter.\n",
        author: "-E. E. Cummings",
    },

];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//Math.floor() : 소수점 이하를 버림한다.
//Math.ceil() : 소수점 이하를 올림한다.
//Math.round() : 소수점 이하를 반올림한다.
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

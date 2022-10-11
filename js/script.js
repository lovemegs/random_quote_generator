/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

/*** 
 An array of some of my favorite quotes
***/
const quotes = [
  {
    quote: 'When you reach the end of your rope, tie a knot in it and hang on.',
    source: 'Franklin D. Roosevelt',
  },
  {
    quote: 'Everyone you meet is fighting a battle you know nothing about. Be kind. Always.',
    source: 'Robin Williams'
  },
  {
    quote: 'All our dreams can come true if we have the courage to pursue them.',
    source: 'Walt Disney'
  },
  {
    quote: 'Happiness can be found even in the darkest of times if one only remembers to turn on the light',
    source: 'Albus Dumbledore',
    citation: 'Harry Potter and the Prisoner of Azkaban'
  },
  {
    quote: "Unless someone like you cares a whole awful lot, nothing is going to get better, it's not.",
    source: 'Dr. Seuss',
    tag: '#Earth Day, #Global Warming'
  },
  {
    quote: 'Darkness can not drive out darkness; only light can do that. Hate can not drive out hate; only love can do that.',
    source: 'Martin Luther King',
    year: 'December 25, 1957'
  },
  {
    quote: 'Those who dare to fail miserably can achieve greatly.',
    source: 'John F. Kennedy'
  },
  {
    quote: "Po-tay-toes! Boil'em, mash'em, stick'em in a stew.",
    source: 'Samwise Gamgee',
    citation: 'The Lord of the Rings: The Two Towers'
  }
];

// console.log(quotes);

/***
 A function that generates a random number and returns the object array associated with that number
***/

function getRandomQuote() {
  const randomNumber = Math.floor( Math.random() * quotes.length );
  return quotes[randomNumber];
}

/***
 This function calls on getRandomQuote(). It strings together quote and source of quote to display a random quote in browser. It tests if there is a citation, year, and/or tag associated with the random quote and if there is then it concatenates <span> elements.
***/
function printQuote() {
  let quoteObj = getRandomQuote();
  let htmlQuote = `<p class="quote"> ${quoteObj.quote}</p>
  <p class="source"> ${quoteObj.source}`;
  if (quoteObj.citation) {
    htmlQuote += `<span class="citation"> ${quoteObj.citation}</span>`;
  }
  if (quoteObj.year) {
    htmlQuote += `<span class="year"> ${quoteObj.year}</span>`;
  }
  if (quoteObj.tag) {
    htmlQuote += `<span class="tag"> ${quoteObj.tag}</span>`;
  }
  htmlQuote += `</p>`;
  // console.log(htmlQuote);
  return document.getElementById('quote-box').innerHTML = htmlQuote;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
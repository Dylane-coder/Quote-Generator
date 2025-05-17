/*const newQuoteBtn = document.getElementById("new-quote");
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

const quotes = [
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" }
];

newQuoteBtn.addEventListener("click", () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteElement.textContent = randomQuote.text;
  authorElement.textContent = randomQuote.author;
});*/

document.addEventListener('DOMContentLoaded',function() {
  const quotes =[ 
    { quote: "Life is what happens when you're busy making other plans.", author: "Miguel"},
    { quote: "Always Focus Never Give Up" , author: "Dylane"},
    { quote: "Make your live a dream and a dream a reality", author: "Dylan"},
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
  ]
  
  const quoteElement=document.getElementById("quote");
  const authorElement=document.getElementById("author");
  const newQuoteBtn=document.getElementById("new-quote");

  function getRandomQuote() {
    const randomindex= Math.floor(Math.random()*quotes.length);
    const randomQuote= quotes[randomindex];
    return randomQuote;
  }

   function displayNewQuote() {
    const randomQuote = getRandomQuote();
    quoteElement.textContent = `"${randomQuote.quote}"`;
    authorElement.textContent = `- ${randomQuote.author}`;
  }

  // Affiche une citation au chargement de la page
  displayNewQuote();
// Affiche une nouvelle citation lorsque le bouton est cliqué
  newQuoteBtn.addEventListener('click', displayNewQuote);
  
});

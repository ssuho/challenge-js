const quotes = [
  {
    quote: "Super Cool!",
    author: "- Nico",
  },
  {
    quote: "How cool is this?",
    author: "- Nico",
  },
  {
    quote: "In the previous video,",
    author: "- Nico",
  },
  {
    quote: "We're almost there!",
    author: "- Nico",
  },
  {
    quote: "Awesome! You know?",
    author: "- Nico",
  },
];

const quoteName = document.querySelector("#quote span:first-child");
const authorName = document.querySelector("#quote span:last-child");

const quoteList = document.querySelector("#quote");
const quoteBalloon = document.querySelector("#quote-balloon");

function dinoQuote() {
  quoteList.classList.remove(HIDDEN);
  quoteBalloon.classList.remove(HIDDEN);
  dino2.classList.add(HIDDEN);
  dino.classList.add(HIDDEN);
  setTimeout(() => {
    quoteList.classList.add(HIDDEN);
    quoteBalloon.classList.add(HIDDEN);
  }, 2000);
}

function randomNumber() {
  const num = Math.floor(Math.random() * quotes.length);

  function quoteElement() {
    return quotes[num].quote;
  }
  function authorElement() {
    return quotes[num].author;
  }

  quoteName.innerHTML = quoteElement();
  authorName.innerHTML = authorElement();
}

dino.addEventListener("click", dinoQuote);
dino.addEventListener("click", randomNumber);

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
    quote: "Alright... in the previous video...",
    author: "- Nico",
  },
  {
    quote: "Alright... next step, what I wanna to do...",
    author: "- Nico",
  },
  {
    quote: "Alright... on this section...",
    author: "- Nico",
  },
  {
    quote:
      "We are almost there!",
    author: "- Nico",
  },
];

const quoteName = document.querySelector("#quote span:first-child");
const authorName = document.querySelector("#quote span:last-child");
const num = Math.floor(Math.random() * quotes.length);

function quoteElement () {
  return quotes[num].quote;
}
function authorElement () {
  return quotes[num].author;
}

quoteName.innerHTML = quoteElement();
authorName.innerHTML = authorElement();
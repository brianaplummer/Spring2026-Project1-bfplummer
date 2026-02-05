// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const button = document.getElementById("quoteButton");
const quoteText = document.getElementById("quoteText");

const quotes = [
  "Bears. Beets. Battlestar Galactica.",
  "I declare bankruptcy!",
  "Identity theft is not a joke, Jim!",
  "Did I stutter?",
  "I am Beyoncé, always."
];

button.addEventListener("click", () => {
  quoteText.classList.remove("hidden");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
});
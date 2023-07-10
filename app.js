"use strict"
const container = document.getElementById('container')

window.onload = () => {
  getQuote()
}

function randomImg() {
  const imgs = [
    './imgs/ron1.webp',
    './imgs/ron2.webp',
    './imgs/ron3.webp',
    './imgs/ron4.webp',
    './imgs/ron5.webp',
    './imgs/ron6.webp',
    './imgs/ron7.webp',
  ]
  
  const random = imgs[Math.floor(Math.random() * imgs.length)];
  
  return random
}

randomImg()

async function getQuote() {
  const url = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes'
  const response = await fetch(url);
  const result = await response.json();
  const text = result[0]

  // Add quote to DOM
  const quote = document.getElementById('quote');
  quote.innerText = `"${text}"`;
  // Add image to DOM
  const img = document.getElementById('img');
  img.src = randomImg();
  img.classList.add('img')
  container.appendChild(img);
}

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  getQuote()
})
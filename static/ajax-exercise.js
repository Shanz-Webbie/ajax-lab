'use strict';

// PART 1: SHOW A FORTUNE
// document.querySelector('#get-fortune-button').addEventListener('click', showFortune);
function showFortune(evt) {
  // TODO: get the fortune and show it in the #fortune-text div
fetch('/fortune')
  .then((response)=> response.text())
  .then((fortune) => {

    document.querySelector('#fortune-text').innerText = fortune});
  }
  document.querySelector('#get-fortune-button').addEventListener('click', showFortune);
// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;

  // TODO: request weather with that URL and show the forecast in #weather-info
  fetch(`/weather.json?${zipcode}`)
   .then((response) => response.text())
   .then((weather) => {
  document.querySelector('#weather-info').innerHTML = weather});


   }


document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();
  const formInputs = {
    melon: document.querySelector('#melon-type-field').value,
    qty: document.querySelector('#qty-field').value,
  };
  fetch('/order-melons.json', {
    method: 'POST',
    body: JSON.stringify(formInputs),
    headers: {
      'Content-Type' : 'application/json',
    },
  })
  .then((response) => response.text())
  .then((melons) => {
  document.querySelector('#order-status').innerHTML = melons});

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);





//     .then((response) => response.json())
//     .then((responseJson) => {
//       alert(responseJson.status);
//     });
// });

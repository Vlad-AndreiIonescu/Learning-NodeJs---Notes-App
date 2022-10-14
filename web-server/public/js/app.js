console.log("ceva");


const weatherForm = document.querySelector("form");
const search= document.querySelector('input')//asa luam ce informatia si o putem folosi in js
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const location=search.value//cu value extragem valoarea din variabila search

    messageOne.textContent='Loading..'
    messageTwo.textContent=''

    fetch('http://localhost:3000/weather?address='+location+'').then((response) => {
        response.json().then((data) => {
          if (data.error) {
            messageOne.textContent=data.error;
          } else {
            messageOne.textContent=data.forecast.oras
            messageTwo.textContent=data.forecast
          }
        });
      });
  console.log(location);
});

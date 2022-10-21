//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://api.adviceslip.com/advice'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.slip.advice)
        document.querySelector('p').innerText = data.slip.advice
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
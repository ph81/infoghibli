/*
Based in Tania Rascia's Ghibli app:
https://github.com/taniarascia/sandbox/tree/master/ghibli
*/

const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

const apiURL = 'https://ghibliapi.herokuapp.com/films';

//geting data
fetch(apiURL)
  .then(response => response.json())
  .then(data => {
    var films = data;
    // film info
    films.forEach(movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.title;
      h1.textContent += ' (' + movie.director + ', ' + movie.release_date + ')';

      const p = document.createElement('p');
      
      p.textContent = `${movie.description}`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    })
  })
  .catch(err => {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = err;
    app.appendChild(errorMessage);
});

const express = require('express');

const app = express();
const port = 3000;

// parse JSON using express

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


let movies = [
  {
    id: '1',
    title: 'Title 1',
    director: 'Luq Oliveira',
    release_date: '2010-07-16'
  },
  {
    id: '2',
    title: 'Title 2',
    director: 'Luq Silva',
    release_date: '2011-09-12'
  }
];

// get the movie in the form JSON

app.get('/movie', (req, res) => {
  res.json(movies);
});

//set movie to the list

app.post('/movie', (req, res) => {
  const movie = req.body;

  console.log(movie);

  movies.push(movie);

  res.send('Movie is added to the list!');
});

// search for a movie in the list

app.get('/movie/:id', (req, res) => {
  const id = req.params.id;

  for(let movie of movies) {
    if(movie.id === id) {
      res.json(movie);

      return;
    }
  }
  res.status(404).send('Movie not found');
});

//remove movie from the list


app.delete('/movie/:id', (req, res) => {
  const id = req.params.id;

  movies = movies.filter(movie => {
    if(movie.id !== id) {
      return true;
    }
    
    return false;
  });
  res.send('Movie is deleted!');
});


// set the server to listen at port

app.listen(port, () => { console.log(`Server is alive in port ${port}`)});


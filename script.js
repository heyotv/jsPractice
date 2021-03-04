const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const filmOne = prompt('Один из последних просмотренных фильмов?', '');
const filmOneRate = prompt('На сколько оцените его?', '');
const filmTwo = prompt('Один из последних просмотренных фильмов?', '');
const filmTwoRate = prompt('На сколько оцените его?', '');

personalMovieDB.movies[filmOne] = filmOneRate;
personalMovieDB.movies[filmTwo] = filmTwoRate;

console.log(personalMovieDB);
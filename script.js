'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (!personalMovieDB.count || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const filmName = prompt('Один из последних просмотренных фильмов?', ''),
        filmRate = prompt('На сколько оцените его?', '');

      if (filmName && filmName.length < 50 && filmRate) {
        personalMovieDB.movies[filmName] = filmRate;
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

      if (genre) {
        personalMovieDB.genres[i - 1] = genre;
      } else {
        i--;
      }
    }

    personalMovieDB.genres.forEach(function (item, i) {
      console.log(`Любимый жанр #${i + 1} - это ${item}`);
    });
  }
};
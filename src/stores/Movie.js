import { observable, action, makeObservable } from 'mobx';
import { http } from '../utils/axios';
import { autoSave } from '../helpers/mobx';

class Movie {
  movie = {};
  constructor() {
    makeObservable(this, {
      movie: observable
    })
    autoSave(this, 'movieStore');
  }

  setMovie(movie) {
    this.movie = movie;
  }

  onGetMovies(search = 'x men') {
    return new Promise((resolve, reject) => {
      http({ url: `&s=${search}`, method: 'GET' })
        .then(resp => {
          resolve(resp);
        })
        .catch(err => {
          reject(err);
        })
    })
  }
}
const movie = new Movie();
export default movie;
import { observable, action, makeObservable } from 'mobx';
import { http } from '../utils/axios';

class Movie {
  constructor() {}

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
import { observable, action, makeObservable } from 'mobx';
import { autoSave } from '../helpers/mobx';
import { http } from '../utils/axios';
class User {
  user = {};
  isLoggedIn = false;

  constructor() {
    makeObservable(this, {
      setUser: action,
      user: observable,
      isLoggedIn: observable
    })
    autoSave(this, 'userStore');
  }
  
  getUser() {
    if (this.isLoggedIn) {
      return user;
    } else {
      const rememberMe = localStorage.getItem('remember_me');
      if (rememberMe  && rememberMe == 'true') {
        const loggedUser = JSON.parse(localStorage.getItem('logged_user'));
        this.isLoggedIn = true;
      } else {
        const loggedUser = sessionStorage.getItem('logged_user');
        if (loggedUser) {
          this.isLoggedIn = true;
          return JSON.parse(loggedUser);
        }
      }
    }
  }

  onGetCountries() {
    return new Promise ((resolve, reject) => {
      http({ url: 'v2/countries', method: 'GET' })
      .then(resp => {
        console.log("RESPONSE: ", resp);
        resolve(resp);
      })
      .catch(err => {
        reject(err);
      })

    })
  }

  onLogin(user) {
    return new Promise ((resolve, reject) => {
      //Login Call
      http({ url: 'user/login', method: 'POST', data: { username: user.username, password: user.password } })
        .then(resp => {
          console.log("RESPONSE: ", resp);
          if (resp.success) {
            localStorage.setItem('access_token', resp.data.token);
            this.setUser(resp.data.user);
            this.isLoggedIn = true;
          }
          resolve(resp);
        })
        .catch(err => {
          reject(err);
        })

    })
  }

  setUser(user = {}) {
    if (user) {
      if (user.remember) {
        localStorage.setItem('logged_user', JSON.stringify(user));
      } else {
        sessionStorage.setItem('logged_user', JSON.stringify(user));
      }
      localStorage.setItem('remember_me', user.remember);
    }
    this.user = user;
  }

  onLogout() {
    this.setUser({});
    this.isLoggedIn = false;
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = '/login';
  }
}
const user = new User();
export default user;
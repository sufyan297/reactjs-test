import { observable, action, makeObservable } from 'mobx';
import { autoSave } from '../helpers/mobx';
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

  onLogin(user) {
    this.setUser(user);
    this.isLoggedIn = true;
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
import { observable, action, makeObservable } from 'mobx';
import { autoSave } from '../helpers/mobx';

class Auth {
  user = {};
  isLoggedIn = false;

  constructor() {
    makeObservable(this, {
      user: observable,
      setUser: action
    })
    autoSave(this, 'authStore');
  }

  onLogin(user) {
    console.log("Login...");
    //API CALLED.
    //Success
    this.isLoggedIn = true;
    this.setUser(user);
  }

  onLogout() {
    this.isLoggedIn = false;
    localStorage.clear();
    sessionStorage.clear();
  }

  setUser(user) {
    this.user = user;
  }

}

const authStore = new Auth();
export default authStore;
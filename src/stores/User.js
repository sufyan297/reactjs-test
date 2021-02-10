import { observable, action, makeObservable } from 'mobx';

class User {
  user = null;
  isLoggedIn = false;

  constructor() {
    makeObservable(this, {
      setUser: action,
      user: observable,
      isLoggedIn: observable
    })
  }
  
  setUser(user = null) {
    this.user = user;
  }
}
const user = new User();
export default user;
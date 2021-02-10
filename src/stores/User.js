import { observable, action, makeObservable } from 'mobx';

class User {
  user = null;

  constructor() {
    makeObservable(this, {
      setUser: action,
      user: observable
    })
  }
  
  setUser(user = null) {
    this.user = user;
  }
}
const user = new User();
export default user;
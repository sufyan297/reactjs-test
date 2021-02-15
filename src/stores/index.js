import userStore from '../stores/User';
import movieStore from '../stores/Movie';
import testStore from '../stores/Test';

export default () => {
  return {
    userStore,
    movieStore,
    testStore
  };
}
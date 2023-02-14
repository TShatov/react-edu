import MainPage from '~src/components/views/Main/';
import { mainPath } from '~src/helpers/routes';

export default {
  path: mainPath(),
  component: MainPage,
  exact: true,
  strict: true
};
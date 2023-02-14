import CartPage from '~src/components/views/Cart/';
import { cartPath } from '~src/helpers/routes';

export default {
  path: cartPath(),
  component: CartPage,
  exact: true
};
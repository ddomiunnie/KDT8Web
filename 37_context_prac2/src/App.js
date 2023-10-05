import Cart from './Cart';
import ProductList from './ProductList';
import { CartProvider } from './store/cart-context';

function App() {
  return (
    <>
      <CartProvider>
        <ProductList />
        <Cart />
      </CartProvider>
    </>
  );
}

export default App;

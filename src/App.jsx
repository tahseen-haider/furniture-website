import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainLayout, CheckoutLayout } from '@templates';
import {
  HomePage,
  ProductsListPage,
  CollectionPage,
  ProductPage,
  CheckoutPage,
  TrackingPage,
} from '@pages';
import { ScrollToTop } from '@components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCart } from '@store';
import { loadCart } from '@utils';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadedCart = loadCart() || {};
    dispatch(setCart(loadedCart));
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<CollectionPage />} />
          <Route path="/collections/:categoryName" element={<ProductsListPage />} />
          <Route path="/products" element={<CollectionPage />} />
          <Route path="/products/:categoryName" element={<ProductsListPage />} />
          <Route path="/product/:productId/:productName" element={<ProductPage />} />
        </Route>
        <Route element={<CheckoutLayout />}>
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/track-order" element={<TrackingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

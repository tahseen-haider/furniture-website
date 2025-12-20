import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainLayout, CheckoutLayout, AuthPageLayout } from '@templates';
import {
  HomePage,
  ProductsListPage,
  CollectionPage,
  ProductPage,
  CheckoutPage,
  TrackingPage,
  LoginPage,
} from '@pages';
import { ScrollToTop } from '@components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCart, fetchCurrentUser } from '@store';
import { loadCart } from '@utils';
import SignupPage from './pages/SignupPage';
import VerifyEmailPage from './pages/VerifyEmailPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadedCart = loadCart() || {};
    dispatch(setCart(loadedCart));
    dispatch(fetchCurrentUser());
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
        <Route element={<AuthPageLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />
        </Route>
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

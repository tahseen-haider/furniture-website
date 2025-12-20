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
  RequestPasswordPage,
  VerifyEmailPage,
  SignupPage,
  ResetPasswordPage,
} from '@pages';
import { ScrollToTop } from '@components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCart, fetchCurrentUser } from '@store';
import { loadCart } from '@utils';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadedCart = loadCart() || {};
    dispatch(setCart(loadedCart));
    dispatch(fetchCurrentUser());
  }, [dispatch]);

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
          <Route path="/request-password-set" element={<RequestPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
        </Route>
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

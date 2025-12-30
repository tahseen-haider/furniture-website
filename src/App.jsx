import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainLayout, CheckoutLayout, AuthPageLayout, AdminLayout } from '@templates';
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
  PageNotFound,
  AdminDashboardPage,
  AdminCollectionsPage,
  AdminOrdersPage,
  AdminProductsPage,
  AdminUsersPage,
} from '@pages';
import { ScrollToTop } from '@components';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCart, fetchCurrentUser, fetchRemoteCart, syncCartToRemote } from '@store';
import { loadCart } from '@utils';
import { RequireAuth, RequireGuest, RequireRole } from '@routes';

const App = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);

  const hydratedRef = useRef(false);

  useEffect(() => {
    const localCart = loadCart() || {};
    dispatch(setCart(localCart));
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (!isLoggedIn) {
      hydratedRef.current = false;
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (!isLoggedIn || hydratedRef.current) return;

    hydratedRef.current = true;

    const localCart = loadCart() || {};

    dispatch(fetchRemoteCart())
      .unwrap()
      .then((remoteCart) => {
        if (remoteCart && Object.keys(remoteCart).length > 0) {
          dispatch(setCart(remoteCart));
        } else if (Object.keys(localCart).length > 0) {
          dispatch(syncCartToRemote(localCart));
        }
      })
      .catch(() => {
        if (Object.keys(localCart).length > 0) {
          dispatch(syncCartToRemote(localCart));
        }
      });
  }, [isLoggedIn, dispatch]);

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
        <Route element={<RequireGuest />}>
          <Route element={<AuthPageLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/verify-email" element={<VerifyEmailPage />} />
            <Route path="/request-password-set" element={<RequestPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
          </Route>
        </Route>

        <Route element={<RequireAuth />}>
          <Route element={<RequireRole allowedRoles={['admin']} />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<AdminDashboardPage />} />
              <Route path="collections" element={<AdminCollectionsPage />} />
              <Route path="orders" element={<AdminOrdersPage />} />
              <Route path="products" element={<AdminProductsPage />} />
              <Route path="users" element={<AdminUsersPage />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainLayout } from '@templates';
import { HomePage, ProductsListPage, CollectionPage, ProductPage } from '@pages';
import { ScrollToTop } from '@components';
import { GlobalProvider } from '@contexts';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalProvider>
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
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default App;

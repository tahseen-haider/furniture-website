import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainLayout } from '@templates';
import { HomePage, ProductsPage, CollectionPage } from '@pages';
import { ScrollToTop } from '@components';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<CollectionPage />} />
          <Route path="/collections/:categoryName" element={<ProductsPage />} />
          <Route path="/products" element={<CollectionPage />} />
          <Route path="/products/:categoryName" element={<ProductsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

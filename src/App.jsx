import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainLayout } from '@templates';
import { HomePage, ProductsPage, CollectionPage } from '@pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<CollectionPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

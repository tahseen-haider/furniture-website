import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainLayout from './templates/MainLayout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

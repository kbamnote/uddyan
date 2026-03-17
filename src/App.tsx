import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Plants from './pages/Plants';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Login from './pages/Login';

const CorporateGifting = lazy(() => import('./pages/CorporateGifting'));
const Gifting = lazy(() => import('./pages/Gifting'));
const GardenServices = lazy(() => import('./pages/GardenServices'));
const Offers = lazy(() => import('./pages/Offers'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-[#5a7c5a] border-t-transparent rounded-full animate-spin" /></div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="plants" element={<Plants />} />
              <Route path="product/:id" element={<ProductDetails />} />
              <Route path="cart" element={<Cart />} />
              <Route path="contact" element={<Contact />} />
              <Route path="blog" element={<Blog />} />
              <Route path="corporate-gifting" element={<CorporateGifting />} />
              <Route path="gifting" element={<Gifting />} />
              <Route path="garden-services" element={<GardenServices />} />
              <Route path="offers" element={<Offers />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </Router>
    </CartProvider>
  );
}

export default App;

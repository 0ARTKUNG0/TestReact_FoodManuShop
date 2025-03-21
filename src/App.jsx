import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext';

const HomePage = lazy(() => import('./HomePage'));
const MainCoursesPage = lazy(() => import('./MainCoursesPage'));
const SidesAppetizersPage = lazy(() => import('./SidesAppetizersPage'));

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/main-courses" element={<MainCoursesPage />} />
            <Route path="/sides-appetizers" element={<SidesAppetizersPage />} />
          </Routes>
        </Suspense>
      </Router>
    </CartProvider>
  );
}

export default App;

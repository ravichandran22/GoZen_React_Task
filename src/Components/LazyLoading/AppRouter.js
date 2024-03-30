import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home2 from './Home2';
import About2 from './About2';

const Home = lazy(() => import('./Home2'));
const About = lazy(() => import('./About2'));

const AppRouter = () => {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/home" element={<Home2 />} />
            <Route exact path="/about" element={<About2 />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default AppRouter;

import React, {useState, Suspense} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Button from './Components/BasicComponent/Button';
import ConditionalComponent from './Components/ConditionalRendering/ConditionalComponent';
import Counter from './Components/StateManagement/Counter';
import Form from './Components/Form/Form';
import MyComponentWithRenderLogging from './Components/ComponentComposition';
import DataFetcher from './Components/UseEffectHook/DataFetcher';
import Main from './Components/Routing/Main';
import Home from './Components/Routing/Home';
import About from './Components/Routing/About';
import Contact from './Components/Routing/ContactUs';
import Parent from './Components/StateLiftUpandPropsDrilling/Parent';
import CounterComponent from './Components/ContextAPI/CounterComponent';
import MyComponent from './Components/PerformanceOptimization/MyComponent';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import Sample from './Components/ErrorBoundary/Sample';
import UserInterface from './Components/OptimisticUiUpdates/UserInterface';
import AppRouter from './Components/LazyLoading/AppRouter';
import Login from "./Components/Authentication/Login";
import Demo from "./Components/Authentication/Demo";

function App() {
  const navItems = [
    {path: '/home', name: 'Home'},
    {path: '/about', name: 'About'},
    {path: '/contact', name: 'Contact'},
]

  const [isAuthenticated, setIsAuthenticated] = useState(false);
    const renderProtectedRoute = (Component, ...rest) => {
      return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" replace />;
    };

  return (
    <div className="App">
      <h1>React Tasks</h1>
      <Router>
      <Main navItems={navItems} />
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/"
            element={renderProtectedRoute(Demo, setIsAuthenticated)}
          />
        </Routes>
      </Router>

      <Button />
      <Counter />
      <ConditionalComponent />
      <Form />
      <MyComponentWithRenderLogging />
      <DataFetcher />
      <Parent />
      <CounterComponent />
      <MyComponent />
      <ErrorBoundary>
        <Sample />
      </ErrorBoundary>
      <UserInterface />
      <AppRouter />
    </div>
  );
}

export default App;

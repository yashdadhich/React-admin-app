import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import SideMenu from './Components/SideMenu';
import Footer from './Components/Footer';
import Dashboard from '../src/Dashboard/dashboard'; // Corrected import name
import Login from './Dashboard/Authorization/Login';
import Trading from './app/modules/Examples/Trading';

// Import other modules and their pages
// import OtherModuleComponent from './OtherModuleComponent';
// import OtherModulePage from './OtherModulePage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="wrapper">
        {isLoggedIn && <Header />}
        <div className="main-wrapper">
          {isLoggedIn && <SideMenu />}
          <Routes>
            <Route
              path="/"
              element={isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
            />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            {isLoggedIn && (
              <>
                {/* Define routes for other modules and their pages */}
                <Route path="/trading" element={<Trading />} />
                {/* <Route path="/other-module/page" element={<OtherModulePage />} /> */}
              </>
            )}
            {isLoggedIn && (
              <Route
                path="/dashboard/*"
                element={<PrivateRoute isLoggedIn={isLoggedIn} component={Dashboard} />}
              />
            )}
          </Routes>
        </div>
        {isLoggedIn && <Footer />}
      </div>
    </Router>
  );
}

function PrivateRoute({ component: Component, isLoggedIn, ...rest }) {
  return isLoggedIn ? <Component {...rest} /> : <Navigate to="/login" />;
}

export default App;

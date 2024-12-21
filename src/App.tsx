import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/notFound/notFound';
import Home from "./pages/home/home.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;


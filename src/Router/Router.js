import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Error from '../components/Error/Error';
import Logements from '../components/FicheLogement/Logements';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logements" element={<Logements />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default AppRouter;

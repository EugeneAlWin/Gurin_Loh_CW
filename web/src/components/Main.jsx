import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage.jsx';
export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/theory" element={<h1>2</h1>} />
      <Route path="/structure" element={<h1>3</h1>} />
      <Route path="/simulator" element={<h1>4</h1>} />
      <Route path="/contacts" element={<h1>5</h1>} />
    </Routes>
  );
}

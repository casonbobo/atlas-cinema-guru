import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SideBar from '../../components/navigation/Sidebar';
import Header from '../../components/navigation/Header';
import HomePage from './HomePage';
import Favorites from './Favorites';
import WatchLater from './WatchLater.js';
import './dashboard.css';

function Dashboard ({userUsername, setIsLoggedIn}) {
  return (
    <BrowserRouter>
      <Header>userUsername={userUsername} setIsLoggedIn={setIsLoggedIn}</Header>
      <div className="dashboard">
        <SideBar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Dashboard;

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SideBar from '../../components/navigation/SideBar';
import HomePage from '../home/HomePage';
import Favorites from '../favorites/Favorites';
import WatchLater from '../watchlater/WatchLater';
import './dashboard.css';

const Dashboard = () => {
  return (
    <BrowserRouter>
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

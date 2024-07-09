import React from 'react';
import './dashboard.css';
import Header from '../../components/navigation/Header';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
  return (
    <div className="dashboard">
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      {/*dashboard content here */}
    </div>
  );
};

export default Dashboard;

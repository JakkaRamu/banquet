import React from "react";
import "./homepage.css"; // Import the CSS file

const HomePage = () => {
  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <span className="username">Hello Username</span>
        <button className="logout-btn">Logout</button>
      </div>

      <div className="main">
        {/* Sidebar */}
        <div className="sidebar">
          <button className="sidebar-btn">Profile</button>
          <button className="sidebar-btn">Bank Account</button>
          <button className="sidebar-btn">Notifications</button>
          <button className="sidebar-btn">History</button>

        </div>

        {/* Content Area */}
        <div className="content">
          <div className="hotel-list">
            <h3>List of Hotels You Added</h3>
            <div className="hotels">Hotels list</div>
          </div>

          <button className="add-hotel-btn">Click here to add hotel</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

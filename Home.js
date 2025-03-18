import React, { useState } from "react";
import "./Home.css"; // Ensure you have this CSS file

const Home = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="home-container">
      <h1>Welcome to <span className="brand">ElderlyCare</span></h1>
      <p className="subtitle">Find support, services, and volunteering opportunities.</p>

      {/* Announcement Section */}
      <div className="announcement-container">
        <div className="tabs">
          <button
            className={activeTab === "general" ? "active" : ""}
            onClick={() => setActiveTab("general")}
          >
            General Updates
          </button>
          <button
            className={activeTab === "events" ? "active" : ""}
            onClick={() => setActiveTab("events")}
          >
            Upcoming Events
          </button>
        </div>
        <div className="announcement-content">
          {activeTab === "general" ? (
            <p>📢 ElderlyCare is expanding its services! Stay tuned for more updates.</p>
          ) : (
            <p>🎉 Join our community event this weekend to support the elderly.</p>
          )}
        </div>
      </div>

      {/* Services and Volunteer Sections */}
      <div className="info-container">
        {/* Services Section */}
        <div className="services-section">
          <h2>Our Services</h2>
          <ul>
            <li>🏠 Home Assistance</li>
            <li>⚕️ Medical Support</li>
            <li>📞 Emergency Helpline</li>
          </ul>
        </div>

        {/* Volunteer Section */}
        <div className="volunteer-section">
          <h2>Become a Volunteer</h2>
          <p>Join us in making a difference in elderly lives.</p>
          <a href="/volunteer" className="volunteer-btn">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { FaHome, FaHeartbeat, FaPhoneAlt, FaUtensils, FaUserNurse, FaHandsHelping } from "react-icons/fa";
import "./Services.css"; // Import CSS for styling

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <p className="services-intro">We provide dedicated assistance to ensure elderly well-being.</p>

      <div className="services-list">
        {/* Service Cards */}
        <div className="service-card">
          <FaHome className="service-icon" />
          <h3>Home Assistance</h3>
          <p>Helping elderly individuals with daily tasks, housekeeping, and personal care.</p>
        </div>

        <div className="service-card">
          <FaHeartbeat className="service-icon" />
          <h3>Medical Support</h3>
          <p>Regular health check-ups, medication reminders, and emergency care services.</p>
        </div>

        <div className="service-card">
          <FaPhoneAlt className="service-icon" />
          <h3>Emergency Helpline</h3>
          <p>24/7 support for urgent medical or safety concerns, available at all times.</p>
        </div>

        <div className="service-card">
          <FaUtensils className="service-icon" />
          <h3>Meal Assistance</h3>
          <p>Providing nutritious meals and ensuring proper diet management for elderly individuals.</p>
        </div>

        <div className="service-card">
          <FaUserNurse className="service-icon" />
          <h3>Caregiver Support</h3>
          <p>Trained caregivers to assist seniors with their physical and emotional well-being.</p>
        </div>

        <div className="service-card">
          <FaHandsHelping className="service-icon" />
          <h3>Community Engagement</h3>
          <p>Organizing social events and activities to keep elderly people engaged and happy.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;

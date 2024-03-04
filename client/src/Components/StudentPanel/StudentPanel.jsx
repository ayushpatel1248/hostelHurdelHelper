import React, { useState } from "react";
import "./StudentPanel.css";

const HostelComplaintForm = () => {
  const [formData, setFormData] = useState({
    issueType: "",
    duration: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // You can send the form data to the server or perform any other actions
  };

  return (
    <div className="complaint-form-container">
      <h2>Hostel Complaint Form</h2>
      <form onSubmit={handleSubmit} className="complaint-form">
        <div className="form-group">
          <label>Issue Type:</label>
          <div className="radio-options">
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
            >
              <option value="1 day">Room Clean</option>
              <option value="2 days">Furniture Problem</option>
              <option value="1 week">Wifi Issue</option>
              <option value="1 month">Electricity</option>
              <option value="1 day">Elevator Issue</option>
              <option value="2 days">Drinking Water</option>
              <option value="1 week">Hot Water</option>
              <option value="1 month">Unwanted Noise</option>
              <option value="1 month"></option>
            </select>
            {/* Repeat similar structure for other radio options */}
          </div>
        </div>

        <div className="form-group">
          <label>From how many days are you facing this issue?</label>
          <select
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          >
            <option value="1 day">1 day</option>
            <option value="2 days">2 days</option>
            <option value="1 week">1 week</option>
            <option value="1 month">1 month</option>
          </select>
        </div>

        <div className="form-group">
          <label>Explain your issue in brief:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HostelComplaintForm;

import React from "react";
import { useNavigate } from "react-router-dom";
import BusinessSignup from "./BusinessSignup";
import "./business.css";

const BusinessRolePage = () => {
  const navigate = useNavigate();

  return (
    <div className="business-role-container">
      <button className="go-back" onClick={() => navigate(-1)}>Go Back</button>
      <BusinessSignup />
    </div>
  );
};

export default BusinessRolePage;

import React from 'react';
import { useNavigate } from 'react-router-dom';

import CustomerSignup from './CustomerSignup';

const CustomerRolePage = () => {
  const navigate = useNavigate();


  return (
    <div>
      <button onClick={() => navigate(-1)}>Go Back</button>

      <CustomerSignup />
    </div>
  );
};

export default CustomerRolePage;

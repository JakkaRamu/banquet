import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Homepage from './components.js/home';
import NewBusinessRolePage from './components.js/NewBusinessRolePage'; // Updated import
import CustomerRolePage from './components.js/CustomerRolePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/business" element={<NewBusinessRolePage />} /> 
          <Route path="/customer" element={<CustomerRolePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

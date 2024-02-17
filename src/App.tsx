import React, { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import "./assets/app.scss";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className="App wrapper">
        <Sidebar toggle={toggle} isOpen={isOpen} />
        <Content toggle={toggle} />
      </div>
    </Router>
  );
};

export default App;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import TaskDetail from './components/TaskDetail';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/task/:id" element={<TaskDetail />} />
    </Routes>
  );
};

export default App;

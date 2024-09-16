import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./pages/homePage";
import Register from "./pages/register";
import Login from "./pages/login";
import Layout from "./componenets/layout/layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;

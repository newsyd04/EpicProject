import './App.css';
import Nav from './Nav';
import Main from "./Main"; // Ensure Main is correctly implemented for routing
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import Home from './Home';
import Inner from './Inner';
import Documentation from './Documentation';
import Chat from './Chat';
import Footer from './Footer';
import Search from './SearchComponent';
import CMS from './CMS';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/Dashboard" element={<Inner />} />
          <Route path="/Documentation" element={<Documentation />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/CMS" element={<CMS />} />


      </Routes>
    </>
  );
}

export default App;

import './App.css';
import Nav from './Nav';
import Main from "./Main"; 
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import Home from './Home';
import Inner from './Inner';
import Documentation from './Documentation';
import Chat from './Chat';
import Footer from './Footer';
import Search from './SearchComponent';
import CMS from './CMS';
import Roadmap from './Roadmap';

function App() {
  return (
    <BrowserRouter basename="/EpicProject">
      {/* You can include Nav and Footer here if needed */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/Dashboard" element={<Inner />} />
        <Route path="/GUI" element={<Documentation />} />
        <Route path="/Documentation" element={<Documentation />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/CMS" element={<CMS />} />
        <Route path="/Roadmap" element={<Roadmap />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

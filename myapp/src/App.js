import React from 'react';
import './App.css'
import WebSock from "./WebSock";
import Admin from "./admin/Admin"
import {Routes, Route, Link} from 'react-router-dom';

function App() {

  return (
      <>
      <header>
        <Link to="/">Chat</Link>
        <Link to="/admin">Admin</Link>
      </header>
      <Routes>
        <Route path="/" element={<WebSock/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
      </>
  )
}


export default App;
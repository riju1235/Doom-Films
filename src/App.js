import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}>
        
          </Route>
          <Route path="/detail/:id" element ={<Detail />}>
            
          </Route>
          <Route exact path="/login" element={<Login />}>
        
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

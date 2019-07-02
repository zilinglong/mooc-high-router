import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
// import Frame from './components/Frame';
import Libai from './components/Libai';
import Dufu from './components/Dufu';
import Lishangyin from './components/Lishangyin';
function App() {
  return (
    <Router>
      <div className="App">
        this is App
        <ul>
          <li>
            <Link to="/libai">李白</Link>
          </li>
          <li>
            <Link to="/dufu">杜甫</Link>
          </li>
          <li>
            <Link to="/lishangyin">李商隐</Link>
          </li>
          <Route path="/libai" component={Libai} />
          <Route path="/dufu" component={Dufu} />
          <Route path="/lishangyin" component={Lishangyin} />
        </ul>
      </div>
    </Router>
  );
}

export default App;

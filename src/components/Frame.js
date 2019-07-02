import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import App from '../App';
import Libai from './Libai';
import Lishangyin from './Lishangyin';
import Dufu from './Dufu';
// <Router>
//     <Route path="/" component={App}>
//       <Route path="about" component={About} />
//       <Route path="inbox" component={Inbox}>
//         <Route path="messages/:id" component={Message} />
//       </Route>
//     </Route>
//   </Router>
// <ul>
class Frame extends Component {
  render() {
    return (
      <div className="frame">
        <h1>单页应用</h1>
        <Router>
          <Route path="/libai" component={Libai} />
          <Route path="/dufu" component={Dufu} />
          <Route path="/lishangyin" component={Lishangyin} />
        </Router>
      </div>
    );
  }
}

export default Frame;

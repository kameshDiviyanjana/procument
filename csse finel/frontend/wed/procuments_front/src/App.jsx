import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ViewOrders from './ViewOrders'; // Import your ViewOrders component

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/view-orders">View Orders</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/view-orders" component={ViewOrders} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
    </div>
  );
}

export default App;

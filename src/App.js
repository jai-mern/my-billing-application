import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Chart from 'chart.js/auto';
import PropTypes from 'prop-types';

// Import your components
import Login from './auth/Login';
import Register from './auth/Register';
import ForgotPassword from './auth/ForgotPassword';
import Button from './components/common/Button';
import Input from './components/common/Input';
import Loader from './components/common/Loader';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import SalesChart from '../components/dashboard/SalesChart';
import InventoryList from '../components/dashboard/InventoryList';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import Billing from './pages/Billing';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Profile from './pages/Profile';
import NotFound from './components/NotFound'; // Assuming NotFound component exists

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        <div className="content">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/billing" component={Billing} />
            <Route path="/profile" component={Profile} />
            <Route path="/inventory" component={InventoryList} />
            {/* Route for 404 Not Found page */}
            <Route component={NotFound} />
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

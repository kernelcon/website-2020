import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.scss';

// Import Components
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import SecondaryNav from './components/NavBar/SecondaryNav';

// Import Pages
import About from './pages/About/About';
import Admin from './pages/Admin/Admin';
import Agenda from './pages/Agenda/Agenda';
import Bio from './pages/Agenda/Bio';
import Conference from './pages/Conference/Conference';
import Dates from './pages/Dates/Dates';
import OpenCalls from './pages/OpenCalls/OpenCalls';
import Home from './pages/Home/Home';
import Sponsors from './pages/Sponsors/Sponsors';
import Venue from './pages/Venue/Venue';
import Register from './pages/Register/Register';
import Speakers from './pages/Speakers/Speakers';

function App() {
  return (
    <Router>
      <NavBar />
      <SecondaryNav />
      <div className='page-box'>
        <div className='container'>
          <Route exact path='/' component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/agenda" component={Agenda} />
          <Route exact path="/conference" component={Conference} />
          <Route exact path="/dates" component={Dates} />
          <Route exact path="/open-calls" component={OpenCalls} />
          <Route exact path="/sponsors" component={Sponsors} />
          <Route exact path="/venue" component={Venue} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/bio" component={Bio} />
          <Route exact path="/speakers" component={Speakers} />
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.scss';

// Import Components
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import SecondaryNav from './components/NavBar/SecondaryNav';
import CovidNav from './components/NavBar/CovidNav';

// Import Pages
import About from './pages/About/About';
import Admin from './pages/Admin/Admin';
import Agenda from './pages/Agenda/Agenda';
import Bio from './pages/Agenda/Bio';
import Conference from './pages/Conference/Conference';
import Covid from './pages/Covid/Covid';
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
      <CovidNav />
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
          <Route exact path="/virtual" component={Covid} />
          <Route exact path="/virtual/villages/ot-village" component={() => {
            window.location.href = 'https://unomaha.zoom.us/j/341711080';
            return null;
          }}/>
          <Route exact path="/virtual/villages/mhh" component={() => {
            window.location.href = 'https://zoom.us/j/991201117';
            return null;
          }}/>
          <Route exact path="/virtual/ctf" component={() => {
            window.location.href = 'https://zoom.us/j/387758968?pwd=Y1owQmU1ZDRMeEowbWhDVkg2ZENwdz09';
            return null;
          }}/>
          <Route exact path="/virtual/chat" component={() => {
            window.location.href = 'https://discord.gg/usxmf8d';
            return null;
          }}/>
          <Route exact path="/virtual/terrified-chipmunk" component={() => {
            window.location.href = 'https://vimeo.com/event/30498';
            return null;
          }}/>
          <Route exact path="/virtual/bat-of-doom" component={() => {
            window.location.href = 'https://vimeo.com/event/30495';
            return null;
          }}/>
          <Route exact path="/store" component={() => {
            window.location.href = 'https://shop.spreadshirt.com/kernelcon-cyber-shop/';
            return null;
          }}/>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;



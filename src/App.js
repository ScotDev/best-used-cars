import React from 'react';
import './styles.min.css';

import Navbar from './components/layout/Navbar';
import Banner from './components/layout/Banner';
import MainContent from './components/functional/MainContent';
import SecondaryContent from './components/functional/SecondaryContent';
import Info from './components/layout/Info';
import Footer from './components/layout/Footer';
import Credits from './components/layout/Credits';

function App() {
  return (
    <div className="App">

      <div className="container">
        <Navbar></Navbar>
        <div className="content">
          <Banner></Banner>
          <section id="new-arrivals" className="section-heading">
            <h3>New Arrivals</h3>
          </section>
          <MainContent></MainContent>
          <Info></Info>
          <section id="sale" className="section-heading">
            <h3>Sale</h3>
          </section>
          <SecondaryContent></SecondaryContent>
        </div>
        <Footer></Footer>
        <Credits></Credits>
      </div>

    </div>
  );
}

export default App;
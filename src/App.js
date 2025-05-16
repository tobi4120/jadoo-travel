import React, { useRef } from "react";
import './static/styles/App.scss';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Services from './components/services';
import Destinations from './components/destinations';
import BookTrip from './components/book-trip';
import Testimonials from './components/testimonials';
import Subscribe from './components/subscribe';
import Footer from './components/footer';

// https://www.figma.com/design/bxv2wr4VlHfYjyUPE1hioL/Travel-Website-Landing-Page-(Community)?node-id=108-84&node-type=symbol

function App() {
  const ref = useRef(null);

  return (
    <div className="App" ref={ref}>
      <div className="content">
        <Navbar ref={ref} />
        <Hero />
        <Services />
        <Destinations />
        <BookTrip />
        <Testimonials />
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import gsap from 'gsap';

// scss
import './styles/App.scss';

// pages
import Home from './pages/home';
import CaseStudies from './pages/caseStudies';
import Approach from './pages/approach';
import Services from './pages/services';
import About from './pages/about';

// components
import Header from './components/header';
import Navigation from './components/navigation';

// wait "ms" second after execute "fn" function
function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [dimension, setDimension] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    // prevent flashings
    gsap.to('body', 0, {css: {visibility: "visible"}});

    // Update resize of window to make perfect responsive
    const debouncedHandleResize = debounce(function handleResize() {
      setDimension({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1000);
    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return (
    <>
       <Header dimension={dimension} />
       <div className="App">
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/approach' component={Approach} />
          <Route exact path='/case-study' component={CaseStudies} />
       </div>
       <Navigation />
    </>
  );
}

export default App;

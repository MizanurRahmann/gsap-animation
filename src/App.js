import React, { useEffect } from 'react';
import gsap from 'gsap';

// scss
import './styles/App.scss';

// pages & components
import Home from './pages/home';
import CaseStudies from './pages/caseStudies';
import Approach from './pages/approach';
import Services from './pages/services';
import About from './pages/about';
import Header from './components/header';
import { Route } from 'react-router-dom';

// routes
const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/case-studies', name: 'Case Studies', component: CaseStudies},
  {path: '/approach', name: 'Approach', component: Approach},
  {path: '/services', name: 'Services', component: Services},
  {path: '/about-us', name: 'About Us', component: About},
];



function App() {
  useEffect(() => {
    // prevent flashings
    gsap.to('body', 0, {css: {visibility: "visible"}});
  }, [])

  return (
    <>
       <Header />
       <div className="App">
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/approach' component={Approach} />
          <Route exact path='/case-study' component={CaseStudies} />
       </div>
    </>
  );
}

export default App;

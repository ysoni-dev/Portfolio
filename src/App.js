import React from 'react';
import {Route} from 'react-router-dom'
import Home from './components/Home'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Card from './components/Cardd'
import Try from './components/Try'
import Tryy from './components/Tryy'
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <>
    <CssBaseline/>
    {/* <Home/> */}
    {/* <Resume/> */}
    <Route exact path="/" component={Home} />
    <Route path="/resume" component={Resume} />
    <Route path="/project" component={Tryy} />
    <Route path="/contact" component={Contact} />
    
    </>
  );
}

export default App;

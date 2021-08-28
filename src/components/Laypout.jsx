import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Routes from '../routes/Routes';

const Laypout = () => {
  return (
    <div>
      <BrowserRouter>
        <Route render={ props => (
          <div>
            <Header {...props}/>

            <div className="container">
              <Routes/>
            </div>

            <Footer/>
          </div>
        )} />
      </BrowserRouter>
    </div>
  )
}

export default Laypout

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header'
import Section from './Section';
import Newsletter from './Newsletter';
import Mainmap from './Mainmap';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Header />
    <Section />
    <Mainmap/>
    <Newsletter />
    <Footer/>
  </>

);



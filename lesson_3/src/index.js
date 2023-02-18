import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header'
import Section from './Section';
import Newsletter from './Newsletter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <Header />
    <Section />
    <Newsletter />
  </>

);



import * as React from 'react'

import './Header.scss'
// import logo from './logo.png'


export default function Header() {
  return (
    <div className='header-container'>
      <img className='logo' src='./logo.png' alt='pywebview'/>
      <h2>pywebview</h2>

      <div className='links'>
        <a href='https://pywebview.flowrl.com/' target='_blank'>Documentation</a>
      </div>
    </div>
  );
};

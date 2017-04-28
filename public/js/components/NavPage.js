'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class NavPage extends React.Component {
  render () {
    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <Link activeClassName='active' className='navbar-brand' to='#'>Invoice App</Link>
          </div>
          <div id='navbar' className='navbar-collapse collapse'>
            <ul className='nav navbar-nav'>
              <li>
                <Link activeClassName='active' to='#'>Products</Link>
              </li>
              <li>
                <Link activeClassName='active' to='#'>Customers</Link>
              </li>
              <li>
                <Link activeClassName='active' to='#'>Invoices</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
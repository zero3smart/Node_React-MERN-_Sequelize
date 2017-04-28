'use strict';

import React from 'react';
import NavPage from './NavPage';

export default class Layout extends React.Component {
  render () {
    return (
      <div className='app-container'>
        <NavPage />
        <div className='app-content'>{this.props.children}</div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.object.isRequired
};
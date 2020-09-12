/**
 *  React BarajaJS
 *  A plugin for spreading items in a card-like fashion.
 *
 *  Copyright 2020, Marc S. Brooks (https://mbrooks.info)
 *  Licensed under the MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 */

'use strict';

import React     from 'react';
import PropTypes from 'prop-types';
import Baraja    from 'baraja-js';
import 'baraja-js/dist/baraja.min.css';

/**
 * Provides React Component wrapper.
 */
class BarajaJS extends React.Component {
  componentDidMount() {
    this.baraja = new Baraja(
      this.refs.wrapper,
      this.props.options
    );
  }

  render() {
    return (
      <ul id={this.props.id} className="baraja-container" ref="wrapper">
        {this.props.children.map(Child => <li>{Child}</li>)}
      </ul>
    );
  }
};

BarajaJS.defaultProps = {
  id: 'baraja-js'
};

BarajaJS.propTypes = {
  id: PropTypes.string,
  options: PropTypes.object
};

export default BarajaJS;

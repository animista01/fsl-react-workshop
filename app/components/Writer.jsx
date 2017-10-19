import React from 'react';
import PropTypes from 'prop-types';

export default class Writer extends React.Component {
  static propTypes = {
    value: PropTypes.string
  }
  render(){
    return(
      <p>{this.props.value}</p>
    );
  }
}

import React from 'react';
import { ButtonBack, ButtonNext, WithStore } from 'pure-react-carousel';
import styled from 'styled-components';

class NavigationGroup extends React.Component {
  render() {
    return (
      <div id="current-slide" data-current={this.props.currentSlide}></div>
    )
  }
}

export default WithStore(NavigationGroup, state => ({
  currentSlide: state.currentSlide,
}));
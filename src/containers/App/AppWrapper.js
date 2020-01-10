import React, { useEffect } from 'react';
import { Box } from 'reflexbox';
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components"
import { useStoreState, useStoreActions } from 'easy-peasy';
import { withRouter, Route, Switch } from 'react-router-dom';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${'' /* background: ${p => p.c[1]};
  color: ${p => p.c[0]}; */}
  transition: all .25s ease-in-out;
`;

// import Nav from '../../components/Nav';
// import Profile from '../Profile';
// import Project from '../Project';
// import Legal from '../Legal';
// import Cta from '../../components/Cta';
// import Home from '../Home';
// import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel/';

const AppWrapper = () => {
  const series = useStoreState(state => state.series)[0]; // set correct index here later!

const DynamicGlobalStyle = createGlobalStyle`
  ::selection {
    ${'' /* background-color: ${color[0]};
    color: ${color[1]}; */}
  }
`

  return (
    <StyledWrapper>
      <DynamicGlobalStyle />
      <Box
        sx={{
          mx: 'auto',
          px: [3, 4, 5, 6],
          py: [3, 4, 5, 5],
        }}
      >
        {/* <Nav /> */}
        <Switch>
          {/* <Route exact path="/:projectName" component={Carousel} /> */}
          <Carousel content={series}></Carousel>
        </Switch>
        {/* <Cta content={cta}/> */}
        {/* <Footer /> */}

      </Box>
    </StyledWrapper>
  );
};

export default withRouter(AppWrapper);

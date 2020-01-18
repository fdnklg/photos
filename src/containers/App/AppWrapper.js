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
// import Legal from '../Legal';
// import Cta from '../../components/Cta';
// import Footer from '../../components/Footer';
import List from '../../components/List';
import Project from '../Project';

const AppWrapper = () => {
  const series = useStoreState(state => state.series); // set correct index here later!

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
          height: ['100vh'],
          width: ['100vw'],
          display: 'grid',
          alignItems: 'center'
        }}
      >
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={() => <List data={series} />} />
          <Route exact path="/projects/:projectName" component={Project} />
        </Switch>
        {/* <Cta content={cta}/> */}
        {/* <Footer /> */}

      </Box>
    </StyledWrapper>
  );
};

export default withRouter(AppWrapper);

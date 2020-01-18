import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useRouteMatch } from 'react-router-dom';
import { Box } from 'reflexbox';

import Carousel from '~/components/Carousel';
import Label from '~/components/Label';

const StyledBoxFooter = styled(Box)`
  align-self: end;
  height: 50px;
`;

const Project = () => {
  const match = useRouteMatch();
  const projects = useStoreState(state => state.series);
  const currentSlide = useStoreState(state => state.currentSlide);
  const project = projects.filter(p => p.path === match.params.projectName)[0];
  const medium = project.media[currentSlide];
  const { name } = medium;
  const exif = project.media[currentSlide].exif;
  const { iso, exposureFraction, aperture, focalLength } = exif;




  return (
    <Box
      id="ref"
      sx={{
        mx: 'auto',
        height: ['100vh'],
        width: ['100vw'],
        display: 'grid',
      }}
    >
      <Box
        sx={{
          width: ['100vw'],
          display: 'flex',
          justifyContent: 'center',
          px: [1, 2, 2, 4],
          py: [1, 2, 2, 3]
        }}
      >
        <Box
          sx={{
            px: [1, 3, 3, 3],
            textAlign: 'center',
            alignSelf: 'start',
            display: 'flex',
            width: '300px',
            justifyContent: 'space-between'
          }}
        >
          <Label title={`ISO${iso}`}/>
          <Label title={`${exposureFraction}s`}/>
          <Label title={`f/${aperture}`}/>
          <Label title={`${focalLength}MM`}/>
        </Box>
      </Box>

      <Box
        sx={{
          px: [1, 3, 3, 7],
        }}
      >
      <Carousel content={project}/>
      </Box>
      <Box
        sx={{
          alignSelf: 'end',
          display: 'flex',
          justifyContent: 'space-between',
          px: [3, 3, 4, 4],
          py: [1, 2, 2, 3]
        }}
      >
        <Box
          sx={{
            width: '300px',
            textAlign: 'left',
            alignSelf: 'center'
          }}
        >
        <Label title={project.title}/>
        </Box>

          <Box sx={{
            width: '300px',
            textAlign: 'center',
            alignSelf: 'start'
          }}
        >
          <Label title={name}/>
        </Box>

          <Box sx={{
            width: '300px',
            textAlign: 'end',
            alignSelf: 'start'
          }}
        >
          <Label title={`${parseInt(currentSlide) + 1} OF ${project.media.length}`}/>
        </Box>

      </Box>
    </Box>
  )
}

export default Project;
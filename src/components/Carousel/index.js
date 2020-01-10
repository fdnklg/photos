import React from 'react';
import styled from 'styled-components';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import { useStoreState } from 'easy-peasy';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { Box } from 'reflexbox';

const StyledProjectsWrapper = styled(Box)`
  font-size: ${p => p.theme.fontSizes[1]};
`;

const StyledImage = styled(Image)`
  width: auto !important;
  margin: 0 auto;
`

const Carousel = (props) => {
  const { content } = props;
  const { media, path } = content;
  return (
    <StyledProjectsWrapper>

      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={55}
        totalSlides={2}
      >
        <Slider>
          {
            media.map((item,i) => {
              const dir = `/public/img/${path}/${item.name}.jpg`
              return (
                <Slide index={i}>
                  <StyledImage src={dir}/>
                </Slide>
              )
            })
          }
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>

    </StyledProjectsWrapper>
  );
};

export default Carousel;


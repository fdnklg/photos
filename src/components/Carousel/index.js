import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, WithStore } from 'pure-react-carousel';
import { useStoreState, useStoreActions } from 'easy-peasy';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { Box } from 'reflexbox';

import NavigationGroup from '~/components/NavigationGroup';

const StyledProjectsWrapper = styled(Box)`
  font-size: ${p => p.theme.fontSizes[1]};
`;

const StyledImage = styled(Image)`
  width: auto !important;
  margin: 0 auto;
`

const StyledButtonBack = styled(ButtonBack)`
  width: 50%;
  cursor: url("public/img/ui/btn-back.png"), pointer !important;
`;

const StyledButtonNext = styled(ButtonNext)`
  width: 50%;
  cursor: url("public/img/ui/btn-next.png"), pointer !important;
`;

const ButtonWrapper = styled(Box)`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  background: red;
  opacity: 0;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  position: relative;
`;

const Carousel = (props) => {
  const { content } = props;
  const { media, path } = content;
  const currentSlide = useStoreState(state => state.currentSlide);
  const setCurrentSlide = useStoreActions(actions => actions.setCurrentSlide);

  const getCurrentSlide = () => {
    setTimeout(() => {
      const slide = document.getElementById('current-slide').dataset.current;
      setCurrentSlide(slide);
    }, 50);
  }

  return (
      <StyledCarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={65}
        totalSlides={media.length}
      >
        <NavigationGroup/>
        <Slider>
          {
            media.map((item,i) => {
              const dir = `/public/img/${path}/${item.name}.jpg`;

              return (
                <Slide index={i}>
                  <StyledImage src={dir}/>
                </Slide>
              )
            })
          }
        </Slider>
        <ButtonWrapper>
          <StyledButtonBack onClick={() => getCurrentSlide()}></StyledButtonBack>
          <StyledButtonNext onClick={() => getCurrentSlide()}></StyledButtonNext>
        </ButtonWrapper>
      </StyledCarouselProvider>
  );
};

export default Carousel;


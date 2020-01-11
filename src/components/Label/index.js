import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.p`
 text-transform: uppercase;
 letter-spacing: ${p => p.theme.letterSpacing[4]};
 font-size: ${p => p.theme.fontSizes[2]}

  @media (max-width: ${p => p.theme.sizes.tablet}) {
    margin: 0 !important;
  }
`;

const Label = (props) => {
  const { title } = props;
  return <StyledLabel>{title}</StyledLabel>
}

export default Label;
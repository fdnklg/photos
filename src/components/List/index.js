import React from 'react';
import styled from 'styled-components';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { Box } from 'reflexbox';
import history from '../../../history';
// import { compare } from '~/utils';

import Link from '~/components/Link';

const StyledListWrapper = styled.div`
  font-size: ${p => p.theme.fontSizes[1]};
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTR = styled.tr`
  border-top: ${p => p.border ? '1px solid' + p.c[0] : 'none'};
  transition: ${p => p.theme.transition.s};
  opacity: 1;
  cursor: pointer;
  
  &:hover {
    opacity: .5;
    transition: ${p => p.theme.transition.s}
  }
  
  td {
    padding-top: ${p => p.border ? '1em !important' : '0 !important'};
    font-size: ${p => p.theme.fontSizes[4]};
  }
  

  @media (max-width: ${p => p.theme.sizes.tablet}) {
    font-size: ${p => p.theme.fontSizes[1]};
    td {
      padding-right: 15px;
      font-size: ${p => p.theme.fontSizes[2]};
    }
  }
`;

const StyledTD = styled.td`
  text-align: ${p => p.type === 'last' ? 'end' : 'start'};
  padding: ${p => p.theme.space[3]} 0px ${p => p.theme.space[3]} 0;
  vertical-align: top;
  margin-top: 3px;

  @media (max-width: ${p => p.theme.sizes.tablet}) {
    text-align: left;
  }
`;

const StyledTDType = styled.td`
  text-align: ${p => p.type === 'last' ? 'end' : 'start'};
  padding: ${p => p.theme.space[3]} 0px ${p => p.theme.space[3]} 0;
  vertical-align: top;
  margin-top: 3px;

  @media (max-width: ${p => p.theme.sizes.tablet}) {
    text-align: left;
  }

  @media (max-width: ${p => p.theme.sizes.mobile}) {
    display: none;
  }
`;

const StyledTitle = styled.td`
  font-family: ${p => p.theme.fonts.headline};
  text-align: ${p => p.type === 'last' ? 'end' : 'start'};
  padding: ${p => p.theme.space[3]} 0px ${p => p.theme.space[3]} 0;
  transition: opacity ${p => p.theme.times[0]} ease-in-out;

  @media (max-width: ${p => p.theme.sizes.tablet}) {
    font-size: ${p => p.theme.fontSizes[2]};
    text-align: left;
  }

  &:hover {
    opacity: .5;
    transition: opacity ${p => p.theme.times[0]} ease-in-out;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const isNewYear = (data,i) => {
  const l = data.length;
  const previous = data[i===0?l-1:i-1];
  const current = data[i];
  const next = data[i===l-1?0:i+1];
  return previous.year !== current.year;
}

const List = (props) => {
  const { data } = props;
  console.log(props);
  const color = useStoreState(state => state.color);
  // const setColor = useStoreActions(actions => actions.color.setColor);
  // const sortedByYear = data.sort(compare);
  const newYear = true;

  const handleClick = (path) => {
    console.log(path)
    history.push(`/projects/${path}`)
  }

  return (
    <Box
      id="ref"
      sx={{
        mx: 'auto',
        px: [1, 3, 3, 7],
        py: [3, 4, 5, 3],
        height: ['100vh'],
        width: ['100vw'],
        display: 'grid',
        alignItems: 'center'
      }}
    >
      <StyledTable>
        <tbody>
          { data.map((p,i) => {
            const newYear = isNewYear(data,i)
            return (
                <StyledTR
                  key={`key-project-${i}`}
                  onClick={() => { handleClick(p.path)} }
                  c={color}
                  border={newYear}
                  key={`tr-${i}`}
                >
                  <StyledTD>{p.title}</StyledTD>
                  <StyledTD type="last">{newYear ? p.year : ''}</StyledTD>
                </StyledTR>
            )
          }) }
        </tbody>
      </StyledTable>
    </Box>
  );
};

export default List;
import React from 'react';
import styled from 'styled-components';

const Link = (props) => {
  const { href, title, alt } = props;
  return (
    <a alt={alt} href={href}>{title}</a>
  )
}

export default Link;
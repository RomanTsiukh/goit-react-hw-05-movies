import styled from 'styled-components';

export const BoxCard = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: ${p => p.theme.space[4]}px;
  border-bottom: 2px solid black;
`;

export const Img = styled.img`
  height: 300px;
`;

export const NameMovie = styled.h1`
  font-size: ${p => p.theme.fontSizes.l};
  padding-bottom: ${p => p.theme.space[3]}px;
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.m};
  padding-bottom: ${p => p.theme.space[3]}px;
`;

export const Text = styled.h2`
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.normal};
`;

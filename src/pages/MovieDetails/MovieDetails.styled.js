import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Linka = styled(Link)`
  margin-left: ${p => p.theme.space[4]}px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  color: ${p => p.theme.colors.black};
  gap: ${p => p.theme.space[2]}px;
  border: 1px solid black;
  padding: ${p => p.theme.space[1]}px;
  border-radius: ${p => p.theme.radii.sm};

  :hover,
  :focus {
    color: ${p => p.theme.colors.orange};
    border: ${p => p.theme.borders.normal};
  }
`;

export const BoxInformation = styled.div`
  border-bottom: 2px solid black;
  padding: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[6]}px;
`;

export const Title = styled.h2`
  padding-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Href = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.colors.black};

  :hover,
  :focus {
    color: ${p => p.theme.colors.orange};
  }
`;

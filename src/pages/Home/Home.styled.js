import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.m};
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
`;

export const List = styled.ul`
  padding-left: ${p => p.theme.space[5]}px;
`;

export const Item = styled.li`
  text-decoration: none;
  color: ${p => p.theme.colors.orange};
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.black};
`;

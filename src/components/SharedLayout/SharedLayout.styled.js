import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  font-size: ${p => p.theme.fontSizes.m};

  padding-left: ${p => p.theme.space[6]}px;
  padding-right: ${p => p.theme.space[6]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-top: ${p => p.theme.space[3]}px;
  border-bottom: 2px solid black;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: ${p => p.theme.space[5]}px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.black};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.orange};
    opacity: 0.7;
  }
  &.active {
    color: ${p => p.theme.colors.orange};
    transform: scale(1.1);
  }
`;

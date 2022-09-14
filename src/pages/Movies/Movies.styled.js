import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[5]}px 0;
  gap: ${p => p.theme.space[4]}px;
`;

export const List = styled.ul`
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Img = styled.img`
  width: 250px;
`;

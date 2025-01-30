import styled from 'styled-components';

export const Container = styled.div`
  nav {
    background-color: yellow;
    position: absolute;
    z-index: 1000000;

    & ul {
      & li {
        &:hover {
          background-color: yellow;
          color: pink;
        }
      }
    }
  }
`;

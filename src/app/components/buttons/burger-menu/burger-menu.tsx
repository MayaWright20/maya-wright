import React from 'react';
import { Container } from './styles';

export default function BurgerMenu() {
  return (
    <Container>
      <nav>
        <ul>
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
        </ul>
      </nav>
    </Container>
  );
}

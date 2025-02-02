import React, { useContext, useState } from "react";
import { Container } from "./styles";
import { HasScreenLoaded } from "@/app/context/loading/has-screen-loaded";

export default function BurgerMenu() {
  const hasScreenLoaded = useContext(HasScreenLoaded);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const isNavAnimationOpening = isNavOpen && hasScreenLoaded;

  const onClick = () => {
    setIsNavOpen((nav) => !nav);
  };

  return (
    <Container
      $loaded={hasScreenLoaded}
      $isNavAnimationOpening={isNavAnimationOpening}
      $isNavOpen={isNavOpen}
    >
      <nav>
        <div className="closed">
          <p onClick={onClick}>{isNavOpen ? "X" : "="}</p>
          {isNavOpen && (
            <ul>
              <li>About</li>
              <li>Experience</li>
              <li>Projects</li>
            </ul>
          )}
        </div>
        {/* {isNavOpen && (
          <div>
            <div onClick={onClick}>exit</div>
            <ul>
              <li>About</li>
              <li>Experience</li>
              <li>Projects</li>
            </ul>
          </div>
        )} */}
      </nav>
    </Container>
  );
}

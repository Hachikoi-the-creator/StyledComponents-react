import React from "react";
import { Container } from "./syled/Container.styled";
import { StyledHeader, Logo, Nav } from "./syled/Header.styled";
import { Button } from "./syled/Button.styled";

export default function Header() {
  return (
    <StyledHeader bg="pink">
      <Container>
        <Nav>
          <Logo src="/imgs/logo.svg" alt="Cool logo" />
          <Button>Try it now</Button>
        </Nav>
      </Container>
    </StyledHeader>
  );
}

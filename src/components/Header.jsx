import React from "react";
import { Container } from "./syled/Container.styled";
import { Flex } from "./syled/Flex.styled";
import { StyledHeader, Logo, Nav, Image } from "./syled/Header.styled";
import { Button } from "./syled/Button.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="/imgs/logo.svg" alt="Cool logo" />
          <Button bg="#fff" color="#333" hover="#e6e6e6">
            Try it now
          </Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg="#ff0099" color="#fff" hover="#e00086">
              Get Started For Free
            </Button>
          </div>

          <Image src="/imgs/illustration-mockups.svg" alt="PC image" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}

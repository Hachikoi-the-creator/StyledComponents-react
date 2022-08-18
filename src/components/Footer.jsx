import React from "react";
import SocialIcons from "./SociaIcons";
import { Container } from "./syled/Container.styled";
import { Flex } from "./syled/Flex.styled";
import { StyledFooter } from "./syled/Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="/imgs/logo-white.svg" alt="white logo img" />

        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>

          <ul>
            <li>
              <a href="#"> About Us</a>
            </li>
            <li>
              <a href="#"> What We Do</a>
            </li>
            <li>
              <a href="#"> FAQ</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <SocialIcons />
        </Flex>

        <p>&copy; 2021 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
}

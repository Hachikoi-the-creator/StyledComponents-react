import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;

  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: right;
  }

  a {
    color: inherit;

    &:hover {
      font-weight: bold;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }

    /* first ul be block */
    /* second & 3rd ul  same line*/
    /* last ul block */
    ul:first-child > *,
    div:last-child > * {
      display: block;
      width: 85vw;
    }
  }
`;

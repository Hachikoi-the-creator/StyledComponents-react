import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & > * {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
  }
`;

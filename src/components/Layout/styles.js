import styled from "styled-components";

import { v } from "../../styles/variables";

export const SLayout = styled.div`
  display: flex;
  min-width:100%;
`;

export const SMain = styled.main`
  display:flex; 
  flex-direction:column;
  justify-content:space-between;
  padding: calc(${v.smSpacing} * 0);
  width:100%;
  margin:0;

  @media screen and (max-width: 568px) {
    width: 100vh;
    height: 100vh;
    }
`;

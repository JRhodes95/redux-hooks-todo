import React from "react";
import styled from "styled-components";
import { colors } from "../styles/global";

const ItemContainer = styled.div`
  border: 1px solid ${colors.black};
  border-bottom: 2px solid ${colors.black};
  border-right: 2px solid ${colors.black};
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-columns: minmax(min-content, 4rem) 1fr;
  grid-column-gap: 1rem;
  align-items: center;
`;

const StatusContainer = styled.div`
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid ${colors.black};
  ${({ state }) => {
    switch (state) {
      case "ACTIVE":
        return `
        background-color: ${colors.raspberry};
        color: ${colors.white};
        font-weight: 700;
        `;

      default:
        break;
    }
  }}}
`;

const HistoryItem = ({ id, info, state }) => {
  return (
    <ItemContainer>
      <StatusContainer state={state}>{state}</StatusContainer>
      <div>{info}</div>
    </ItemContainer>
  );
};

export default HistoryItem;

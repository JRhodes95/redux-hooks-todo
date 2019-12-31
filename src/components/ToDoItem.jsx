import React from "react";
import styled from "styled-components/macro";
import { colors } from "../styles/global";

const ItemContainer = styled.div`
  border: 1px solid ${colors.black};
  border-bottom: 2px solid ${colors.black};
  border-right: 2px solid ${colors.black};
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-column-gap: 1rem;
  align-items: center;
`;

const Button = styled.button`
  -webkit-appearance: none;
  appearance: none;
  -webkit-appearance: none;
  appearance: none;
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid ${colors.black};
  background-color: ${colors.white};
  color: ${colors.black};
  :hover {
    background-color: ${colors.pink};
    color: ${colors.white};
    border: 1px solid ${colors.violet};
  }
  :active {
    background-color: ${colors.violet};
  }
`;

const Info = styled.div``;

const ToDoItem = ({ id, info, removeToDo }) => {
  const handleClick = event => {
    removeToDo({ id: event.target.id });
  };

  return (
    <ItemContainer>
      <Button id={id} onClick={handleClick}>
        Done
      </Button>
      <Info>{info}</Info>
    </ItemContainer>
  );
};

export default ToDoItem;

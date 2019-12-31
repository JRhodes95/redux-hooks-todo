import React from "react";
import styled from "styled-components/macro";
import useToDoList from "../hooks/useToDoList";
import HistoryItem from "./HistoryItem";

const ListContainer = styled.div`
  display: grid;
  grid-row-gap: 1rem;
`;

const PageHeading = styled.h2`
  font-size: 2rem;
`;

const History = () => {
  const { toDos } = useToDoList();
  return (
    <ListContainer>
      <PageHeading>History</PageHeading>
      {toDos.map(({ id, info, state }) => (
        <HistoryItem key={id} id={id} info={info} state={state} />
      ))}
    </ListContainer>
  );
};

export default History;

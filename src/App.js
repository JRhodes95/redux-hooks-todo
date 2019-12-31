import React from "react";
import styled from "styled-components/macro";
import { GlobalStyles } from "./styles/global";
import ToDoList from "./components/ToDoList";

const MinWidth = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr minmax(auto, 1024px) 1fr;
`;

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  grid-column: 2 / -2;
`;

const AppHeading = styled.h1`
  font-size: 4rem;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <MinWidth>
        <AppContainer>
          <AppHeading>Another To Do List</AppHeading>
          <ToDoList />
        </AppContainer>
      </MinWidth>
    </>
  );
}

export default App;

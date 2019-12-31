import React from "react";
import styled from "styled-components/macro";
import { GlobalStyles, colors } from "./styles/global";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import ToDoList from "./components/ToDoList";
import History from "./components/History";

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
  padding: 2rem;
`;

const AppHeading = styled.h1`
  font-size: 4rem;
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  grid-column-gap: 1rem;
  a {
    font-size: 1.25rem;
    text-decoration: none;
    :link {
      text-decoration: none;
    }
    :visited {
      text-decoration: none;
      color: ${colors.black};
    }
  }

  .active {
    text-decoration: none;
    color: ${colors.black};
    border-bottom: 2px solid ${colors.raspberry};
  }
  padding-bottom: 2rem;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <MinWidth>
        <AppContainer>
          <Router>
            <AppHeading>Another To Do List</AppHeading>
            <Nav>
              <NavLink to="/" activeClassName="active" exact>
                List
              </NavLink>
              <NavLink to="/history" activeClassName="active" exact>
                History
              </NavLink>
            </Nav>
            <Switch>
              <Route path="/history">
                <History />
              </Route>
              <Route path="/">
                <ToDoList />
              </Route>
            </Switch>
          </Router>
        </AppContainer>
      </MinWidth>
    </>
  );
}

export default App;

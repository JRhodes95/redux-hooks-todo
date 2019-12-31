import React, { useState } from "react";
import styled from "styled-components/macro";
import { colors } from "../styles/global";

const InputContainer = styled.div`
  border: 1px solid ${colors.black};
  border-bottom: 2px solid ${colors.black};
  border-right: 2px solid ${colors.black};
  width: 100%;
  padding: 1rem;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 4rem;
  grid-column-gap: 1rem;
`;

const Input = styled.input`
  -webkit-appearance: none;
  appearance: none;
  border: none;
  border-bottom: 1px solid ${colors.black};
  background-color: ${colors.white};
  color: ${colors.black};
  font-size: 1rem;
  :focus {
    border-bottom: 1px solid ${colors.pink};
  }
`;

const Submit = styled.input`
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

const ToDoInput = () => {
  const [newToDo, setNewToDo] = useState("");

  const handleChange = event => {
    setNewToDo(event.target.value);
  };

  const handleSubmit = event => {
    alert(`Created ${newToDo}`);
    event.preventDefault();
  };

  return (
    <InputContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          css="width:100%"
          type="text"
          onChange={handleChange}
          placeholder="Remember to take out the bins..."
        />
        <Submit type="submit" value="Add" />
      </Form>
    </InputContainer>
  );
};

export default ToDoInput;

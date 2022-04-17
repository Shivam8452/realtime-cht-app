import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/welcome.png";
import Logout from "./Logout";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect( () => {
    async function setdata(){
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
}
setdata()
  }, []);
  return (
    <Container>
    <Logout/>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  flex-direction: column;
  background-color:#f0f0f0;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;

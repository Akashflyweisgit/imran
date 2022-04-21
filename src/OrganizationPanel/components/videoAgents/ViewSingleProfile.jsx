/** @format */

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import View from "./View";
import HOC from "../../Common/HOC";
import axios from "axios";
import Expand from "react-expand-animated";
import { Card, Grid, Button } from "@material-ui/core";
import ViewProfile from "./ViewProfile";

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;
const MainContainer = styled.div`
  margin: 80px 0;
  width: 100%;

  h5 {
    margin: 20px 0;
  }
`;
const Header = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  border: 1px solid lightblue;
  margin-bottom: 20px;
  border-radius: 4px;

  span {
    padding: 0 20px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #17a2b8;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;
const Inputs = styled.div`
  width: 50%;
`;
const CheckBoxs = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

function ViewSingleProfile() {
  const navigate = useNavigate();

  return (
    <Container>
      <MainContainer>
        <Header>
          <span>
            Organization Admins
            <span onClick={() => navigate("/dashbord")}>
              / Video Agent Profile
            </span>
          </span>
          {/* <button onClick={() => setExpandOpen(!expandOpen)}>
            Add Details
          </button> */}
        </Header>

        <ViewProfile />
      </MainContainer>
    </Container>
  );
}

export default HOC(ViewSingleProfile);

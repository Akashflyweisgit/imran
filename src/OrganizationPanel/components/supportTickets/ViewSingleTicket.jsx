/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HOC from "../../Common/HOC";
import axios from "axios";
import { useParams } from "react-router-dom";
import ViewTicket from "./ViewTicket";

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

function ViewSingleTicket() {
  const navigate = useNavigate();
  const { id } = useParams();

  const token = localStorage.getItem("token");
  const [ticket, setTicket] = useState([]);

  useEffect(() => {
    const fetchTicket = async () => {
      // setLoading(true);

      const auth = {
        headers: { Authorization: `Bearer ${token}` },
      };
      try {
        const { data: response } = await axios.get(
          `https://video-agent-flyweis.herokuapp.com/users/${id}/support-tickets`,
          auth
        );

        setTicket(response.data.supportTickets);

        // console.log("packages", packages);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchTicket();
  }, []);

  console.log("ticket", ticket);

  return (
    <Container>
      <MainContainer>
        <Header>
          <span>
            Organization Admins
            <span onClick={() => navigate("/dashbord")}>/ Home </span>
          </span>
          {/* <button onClick={() => setExpandOpen(!expandOpen)}>
            Add Details
          </button> */}
        </Header>

        <ViewTicket ticket={ticket} />
      </MainContainer>
    </Container>
  );
}

export default HOC(ViewSingleTicket);

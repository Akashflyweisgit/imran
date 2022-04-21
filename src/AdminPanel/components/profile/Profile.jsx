/** @format */

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ViewProfile from "./ViewProfile";
import HOC from "../../Common/HOC";
import axios from "axios";
import { blankValidator, showNotificationMsz } from "../../../utils/Validation";

function Profile(props) {
  const navigate = useNavigate();

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
  // const Inputs = styled.div`
  //   width: 50%;
  // `;
  // const CheckBoxs = styled.div`
  //   width: 50%;
  //   display: flex;
  //   align-items: center;
  // `;
  const [data, setData] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  //edit
  const [dialogOpen, setDialogOpen] = useState(false);

  const [editEmail, setEditEmail] = useState("");
  const [editNumber, setEditNumber] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      // setLoading(true);

      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDQxNzUwOTQxZGM1MjQ0MjcyYWNhOSIsInNjb3BlIjoibG9naW4iLCJpYXQiOjE2NDkyMjY1NDksImV4cCI6MTY1MTgxODU0OX0.Kb-obkAWFS-9XZnJuZ1QLmoa3511dQQY6N7NTzgeuGI";
      const auth = {
        headers: { Authorization: `Bearer ${token}` },
      };
      try {
        const { data: response } = await axios.get(
          "https://video-agent-flyweis.herokuapp.com/users",
          auth
        );
        setData(response.data.users);
        setEditEmail(response.data.users[0].email);
        setEditNumber(response.data.users[0].phoneNumber);
        // console.log("res", response.data.users[0].email);
      } catch (error) {
        console.error(error.message);
      }
      // setLoading(false);
    };

    fetchUserData();
  }, []);

  // console.log("data is", data);

  const handleDialog = () => {
    setDialogOpen(!dialogOpen);
  };

  // const editUser = (row) => {
  //   console.log("editsubcategory", row);
  //   setEditName(row.name);
  //   setEditEmail(row.email);
  //   setEditNumber(row.address);
  //   setEditId(row._id);

  //   handleDialog();
  // };

  return (
    <Container>
      <MainContainer>
        <Header>
          <span>
            Super Admin
            <span onClick={() => navigate("/")}>/Profile</span>
          </span>
        </Header>

        <ViewProfile
          data={data}
          handleDialog={handleDialog}
          setDialogOpen={setDialogOpen}
          dialogOpen={dialogOpen}
          editEmail={editEmail}
          editNumber={editNumber}
          setEditEmail={setEditEmail}
          setEditNumber={setEditNumber}
        />
      </MainContainer>
    </Container>
  );
}

export default HOC(Profile);

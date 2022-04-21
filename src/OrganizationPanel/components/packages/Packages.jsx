/** @format */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ViewPackages from "./ViewPackages";
import HOC from "../../Common/HOC";
import axios from "axios";
import Expand from "react-expand-animated";
import { Card, Grid, Button } from "@material-ui/core";

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

function Packages(props) {
  const navigate = useNavigate();

  const [expandOpen, setExpandOpen] = useState(false);
  const [packages, setPackages] = useState([]);
  const [points, setPoints] = useState(null);
  const [price, setPrice] = useState(null);
  const [status, setStatus] = useState("");
  const [organization, setOrganization] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchPackages = async () => {
      // setLoading(true);

      const auth = {
        headers: { Authorization: `Bearer ${token}` },
      };
      try {
        const { data: response } = await axios.get(
          "https://video-agent-flyweis.herokuapp.com/packages/all",
          auth
        );

        setPackages(response.data.packages);

        // console.log("packages", packages);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchPackages();
  }, []);

  console.log("packages", packages);
  localStorage.setItem("packages", JSON.stringify(packages));

  const addPackages = () => {
    try {
      let url = "https://video-agent-flyweis.herokuapp.com/packages/";

      let temp = {
        price: price,
        points: points,
        status: status,
        organization: organization,
      };

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      axios
        .post(url, temp, config)
        .then(
          (res) => {
            console.log("data Category:::", res);
            alert("Package Created Successfully");
          },

          (error) => {
            console.log("data response error:::", error);
            alert(" Unable To Create Package ");
          }
        )
        .catch((e) => {
          console.log("data response error:::", e);
        });
    } catch (error) {}
  };

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

        <Expand open={expandOpen}>
          <Card className=" mb-2 Card_shadow p-3">
            <div className="card_admissiondetails_height">
              <div className="textfiled_margin">
                <div className="card_content_instition">
                  <div className="text-right">
                    <span
                      className="icon_color"
                      onClick={() => setExpandOpen(!expandOpen)}
                    >
                      <i class="fa fa-times hover_cursor"></i>
                    </span>
                  </div>

                  <Grid className="Component_main_grid">
                    <Grid item md={6}>
                      <div className="text_filed_heading">Points</div>
                      <div className="mr-2 mt-1">
                        <input
                          type="number"
                          className="form-control "
                          placeholder="Enter Points"
                          autoComplete="off"
                          value={points}
                          onChange={(e) => {
                            setPoints(e.target.value);
                          }}
                        />
                      </div>
                    </Grid>

                    <Grid item md={6}>
                      <div className="text_filed_heading">Price</div>
                      <div className="mr-2 mt-1">
                        <input
                          type="number"
                          className="form-control "
                          placeholder="Enter Price"
                          autoComplete="off"
                          value={price}
                          onChange={(e) => {
                            setPrice(e.target.value);
                          }}
                        />
                      </div>
                    </Grid>
                  </Grid>

                  <Grid className="Component_main_grid">
                    <Grid item md={6}>
                      <div className="text_filed_heading">Status</div>
                      <div className=" mr-2  mt-1">
                        <input
                          type="text"
                          className="form-control "
                          placeholder="Enter Status"
                          autoComplete="off"
                          value={status}
                          onChange={(e) => {
                            setStatus(e.target.value);
                          }}
                        />
                      </div>
                    </Grid>

                    <Grid item md={6}>
                      <div className="text_filed_heading">Organization</div>
                      <div className=" mr-2  mt-1">
                        <input
                          type="text"
                          className="form-control "
                          placeholder="Enter Organization"
                          autoComplete="off"
                          value={organization}
                          onChange={(e) => {
                            setOrganization(e.target.value);
                          }}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className="mt-2 pb-2 ">
                  <Button
                    variant="contained"
                    className="button_formatting"
                    onClick={addPackages}
                  >
                    Create
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Expand>
        <ViewPackages
          packages={packages}
          setExpandOpen={setExpandOpen}
          expandOpen={expandOpen}
        />
      </MainContainer>
    </Container>
  );
}

export default HOC(Packages);

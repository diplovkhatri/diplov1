import React from "react";
import { Container, Card } from "react-bootstrap";
import team1 from "./team1.png";
import team2 from "./team2.png";
import { FaTwitter } from "react-icons/fa6";

const Teams = () => {
  return (
    <Container fluid>
      <div className="row">
        <div
          className="font1 col-sm-12 col-lg-12 col-md-12 col-xm-12 fw-bold fs-1 p-4"
          style={{
            color: "#BC4E71"
          }}
        >
          THE TEAM
        </div>
        <div className="col-sm-12">
          <div className="row gy-4">
            <div className="col-lg-6 d-flex justify-content-end col-md-6 col-sm-12 col-xm-12">
              <Card
                style={{
                  width: "400px",
                  borderRadius: "20px 20px 0px 0px",
                  boxShadow:
                    " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }}
              >
                <Card.Img
                  src={team1}
                  style={{
                    border: "none"
                  }}
                />
                <Card.Body
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    boxShadow:
                      " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                  }}
                >
                  <Card.Text>
                    <div className="row">
                      <div className="col-lg-8 col-md-8 d-flex justify-content-start">
                        LUNA
                        <br />
                        Co-Founder
                      </div>
                      <div className="fs-1 col-lg-4 col-md-4 d-flex justify-content-center align-items-center">
                        <a
                          href="https://twitter.com/lunafable_"
                          target="_blank"
                        >
                          <FaTwitter />
                        </a>
                      </div>
                    </div>
                    {/* LUNA
                    <br />
                    Co-Founder */}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-6  col-md-6 col-sm-12 col-xm-12  d-flex justify-content-start">
              <Card
                style={{
                  width: "400px",
                  borderRadius: "20px 20px 0px 0px",
                  boxShadow:
                    " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }}
              >
                <Card.Img
                  src={team2}
                  style={{
                    padding: "0"
                  }}
                />
                <Card.Body
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    boxShadow:
                      " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                  }}
                >
                  <Card.Text>
                    <div className="row">
                      <div className="col-lg-8 col-md-8 d-flex justify-content-start">
                        ERICA
                        <br />
                        Co-Founder
                      </div>
                      <div className=" fs-1 col-lg-4 col-md-4 d-flex justify-content-center align-items-center">
                        <a
                          href="https://twitter.com/ericafable_"
                          target="_blank"
                        >
                          <FaTwitter />
                        </a>
                      </div>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Teams;

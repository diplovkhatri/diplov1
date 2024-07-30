import React from "react";
import logo from "./logo.png";
import { Container, Card } from "react-bootstrap";
import { FaTwitter, FaDiscord } from "react-icons/fa6";

const Top = () => {
  return (
    <Container fluid>
      <nav
        class="navbar "
        style={{
          background: "none"
        }}
      >
        <div
          class="container-fluid d-flex justify-content-between justify-self-center"
          style={{
            height: "70px"
          }}
        >
          <div class="navbar-brand text-black d-flex flex-column" href="/">
            <Card
              className="fw-bold"
              style={{
                height: "60px",
                width: "70px",
                background: "none",
                border: "none"
              }}
            >
              <Card.Img
                variant="top"
                src={logo}
                style={{
                  width: "50px",
                  height: "50px"
                }}
              />
              <span className="m-0 p-0 text-start fs-6">FABLE</span>
              {/* <Card.Body>
                <Card.Title class="">Fable</Card.Title>
              </Card.Body> */}
            </Card>
          </div>
          <div
            className="fs-1 d-flex justify-content-evenly "
            style={{
              width: "150px"
            }}
          >
            <a
              href="https://twitter.com/fablenft_"
              target="_blank"
              style={
                {
                  // color: "#1d4ab3"
                }
              }
            >
              <FaTwitter />
            </a>
            <a href="https://discord.gg/VNs69yBQ" target="_blank">
              <FaDiscord />
            </a>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Top;

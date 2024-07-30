import React from "react";
import { Container, Card } from "react-bootstrap";
import look1 from "./look1.png";
import look2 from "./look2.png";
import look3 from "./look3.png";
import look4 from "./look4.png";

const Looks = () => {
  return (
    <Container>
      <div className="row my-5">
        <div className="font1 col-sm-12 col-lg-12 col-md-12 col-xm-12 text-black fw-bold fs-2 p-4">
          <div className="row">
            <div className="col-lg-6 col-md-8 fs-5 d-flex flex-column justify-content-center justify-self-center">
              <span
                className="d-flex justify-content-start container fs-1 my-4"
                style={{
                  color: "#BC4E71",
                  margin: "0",
                  padding: "0"
                }}
              >
                OUR VISION
              </span>
              <div
                className=" text-black"
                style={{
                  textAlign: "justify"
                }}
              >
                FABLE is a collection of 6666 friendly species.Our vision is to
                bring more joy to the world through community,creativity and
                art.
              </div>
            </div>
            <div className="col-lg-6 col-md-4 col-sm-12 col-xm-12 d-flex justify-content-center">
              <Card style={{ width: "421px", border: "none" }}>
                <Card.Img
                  src={look1}
                  style={{
                    background: "gray",
                    border: "none",
                    borderRadius: "20px",
                    boxShadow:
                      " 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.4)"
                  }}
                />
              </Card>
            </div>
          </div>
        </div>
        <div className="col-sm-12 my-5">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12 bg-white d-flex justify-content-center">
              <Card style={{ width: "350px", border: "none" }}>
                <Card.Img
                  src={look2}
                  style={{
                    background: "white",
                    borderRadius: "20px",
                    boxShadow:
                      " 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.4)"
                  }}
                />
              </Card>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12 bg-white d-flex justify-content-center">
              <Card style={{ width: "350px", border: "none" }}>
                <Card.Img
                  src={look3}
                  style={{
                    background: "gray",
                    borderRadius: "20px",
                    boxShadow:
                      " 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.4)"
                  }}
                />
              </Card>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xm-12 bg-white d-flex justify-content-center">
              <Card style={{ width: "350px", border: "none" }}>
                <Card.Img
                  src={look4}
                  style={{
                    background: "gray",
                    borderRadius: "20px",
                    boxShadow:
                      " 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.4)"
                  }}
                />
              </Card>
            </div>
          </div>
          <br />
        </div>
      </div>
    </Container>
  );
};

export default Looks;

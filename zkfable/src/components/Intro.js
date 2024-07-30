import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaEthereum } from "react-icons/fa6";
import Top from "./Top";
import intro1 from "../components/introimage/intro1.png";
import intro2 from "../components/introimage/intro2.png";
import intro3 from "../components/introimage/intro3.png";
import intro4 from "../components/introimage/intro4.png";
import intro5 from "../components/introimage/intro5.png";

const Intro = () => {
  return (
    <Container
      fluid
      style={{
        top: "15%",
        bottom: "25%",
        background: "rgba(248, 202, 182, 0.20)"
      }}
    >
      <Top />
      <div className="row">
        <span
          className="col-xm-12 col-sm-12 col-md-12 col-lg-12 font1 pt-4"
          style={{
            fontSize: "96px",
            color: "#BC4E71"
          }}
        >
          The FABLE
        </span>
        <span
          className="col-xm-12 col-sm-12 col-md-12 col-lg-12 fs-5 d-flex flex-column justify-content-center justify-self-center"
          style={{
            color: "#721935"
          }}
        >
          FABLE for loved one, FABLE for everyone
          <div className="d-flex justify-content-center justify-self-center">
            <hr
              className="w-50"
              style={{
                height: "5px",
                background:
                  "linear-gradient(316deg, rgba(255, 255, 255, 1) 30%, #781333 50%)"
              }}
            />
          </div>
        </span>
      </div>

      {/* button */}
      <div className="container">
        <div className="mt-3">
          <span
            className="d-flex justify-content-center justify-self-center"
            style={{
              font: "text-uppercase",
              color: "#B1E193",
              fontFamily: "Chelsea Market"
            }}
          >
            <Button
              className="row lg:w-25 d-flex focus:bg-info "
              style={{
                border: "4px solid",
                borderRadius: "20px",
                borderImageSlice: "1",
                background: "none",
                // backgroundImage:
                //   "linear-gradient(to right,brown,gold,green,gray,violet)",
                borderImage:
                  "linear-gradient(to right,black,red,gold,blue,green,gray) 1",
                color: "black",
                textAlign: "center"
              }}
            >
              <div
                className="col-12 text-center fs-4 fw-bold hover:bg-info"
                style={{
                  background: "none"
                }}
              >
                GET WHITELISTED
              </div>
            </Button>
          </span>
        </div>
      </div>
      {/* intro images */}
      <div
        className="d-flex justify-content-between flex-wrap mt-5 pt-5"
        style={{
          marginLeft: "-12px",
          marginRight: "-12px",
          padding: "0px"
        }}
      >
        <img src={intro1} alt="" />
        <img src={intro2} alt="" />
        <img src={intro3} alt="" />
        <img src={intro4} alt="" />
        <img src={intro5} alt="" />
      </div>
    </Container>
  );
};

export default Intro;

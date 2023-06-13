import React from "react";
import { Card } from "react-bootstrap";
import Basi from "../images/basi.jpg";
import Nay from "../images/nay1.jpg";
import Yone from "../images/yone.jpg";
import Hlyn from "../images/hlaing.jpg";
import "../style.css";

function About() {
  return (
    <>
      <div className="container-fluid">
        <div className="container my-6 py-5 text-center">
          <div className="row mb-5">
            <div className="col">
              <h1>Our Team</h1>
              <p className="mt-3">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <img
                  src={Basi}
                  alt="Card-image1"
                  className="img-fluid rounded-circle w-50 mb-6"
                />
                <Card.Title>SiThu</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Graphic Manager @Iprinting
                </Card.Subtitle>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry.
                </Card.Text>
                <Card.Link href="https://www.facebook.com/">
                  <i className="fa fa-facebook"></i>
                </Card.Link>
                <Card.Link href="https://twitter.com/">
                  <i className="fa fa-twitter"></i>
                </Card.Link>
                <Card.Link href="https://www.instagram.com/">
                  <i className="fa fa-instagram"></i>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3 col-md-6">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <img
                  src={Nay}
                  alt="Card-image2"
                  className="img-fluid rounded-circle w-50 mb-6"
                />
                <Card.Title>Nay Lynn</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Project Manager @NEXIS
                </Card.Subtitle>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry.
                </Card.Text>
                <Card.Link href="https://www.facebook.com/">
                  <i className="fa fa-facebook"></i>
                </Card.Link>
                <Card.Link href="https://twitter.com/">
                  <i className="fa fa-twitter"></i>
                </Card.Link>
                <Card.Link href="https://www.instagram.com/">
                  <i className="fa fa-instagram"></i>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3 col-md-6">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <img
                  src={Hlyn}
                  alt="Card-image2"
                  className="img-fluid rounded-circle w-50 mb-6"
                />
                <Card.Title>Hlyn Thazin</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Survey Manager @NEXIS
                </Card.Subtitle>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry.
                </Card.Text>
                <Card.Link href="https://www.facebook.com/">
                  <i className="fa fa-facebook"></i>
                </Card.Link>
                <Card.Link href="https://twitter.com/">
                  <i className="fa fa-twitter"></i>
                </Card.Link>
                <Card.Link href="https://www.instagram.com/">
                  <i className="fa fa-instagram"></i>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-3 col-md-6">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <img
                  src={Yone}
                  alt="Card-image2"
                  className="img-fluid rounded-circle w-50 mb-6"
                />
                <Card.Title>Yone Yone</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Creative Manager @IPrinting
                </Card.Subtitle>
                <Card.Text>
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry.
                </Card.Text>
                <Card.Link href="https://www.facebook.com/">
                  <i className="fa fa-facebook"></i>
                </Card.Link>
                <Card.Link href="https://twitter.com/">
                  <i className="fa fa-twitter"></i>
                </Card.Link>
                <Card.Link href="https://www.instagram.com/">
                  <i className="fa fa-instagram"></i>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
        <hr />
        <br />
        {/* <!--Connect--> */}
        <div className="container-fluid padding">
          <div className="row text-center padding">
            <div className="col-12">
              <h2>Connect</h2>
            </div>
            <div className="col-12 social padding">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

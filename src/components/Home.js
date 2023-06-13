import React from "react";
import { Carousel, Jumbotron, Button } from "react-bootstrap";
import w1 from "../images/1.png";
import w2 from "../images/2.jpg";
import w3 from "../images/3.jpg";
import w4 from "../images/wp1.png";
import "../style.css";
function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={w1}
            alt="First slide"
            sytle={{ height: "50%" }}
          />
          <Carousel.Caption>
            <Jumbotron className="nexis">
              <h1 className="h1">NEXIS GROUP</h1>
              <p style={{ textAlign: "center", fontSize: "10px" }}>
                ICT DEVELOPMENT
              </p>
              <p>
                <Button variant="primary" className="btn-primary">
                  Get Started
                </Button>
                <Button variant="secondary" className="btn">
                  Learn more
                </Button>
              </p>
            </Jumbotron>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={w2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={w3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container-fluid">
        <div className="row jumbotron">
          <div className="col-xs-12 col-sm-12 col-md-9 cl-lg-9 col-xl-10">
            <p className="lead">
              Lorem Ipsum is simply dummy text of the printing and type setting
              industry.Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
            <a href="#">
              <button type="button" className="btn btn-outline-secondary">
                Web Hosting
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* <!--Three Column Section--> */}
      <div className="container-fluid padding">
        <div className="row text-center padding">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <i className="fa fa-code"></i>
            <h3>HTML5</h3>
            <p>Built with the latest version of HTML5</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <i className="fa fa-bold"></i>
            <h3>BOOTSTRAP</h3>
            <p>Built with the latest version of Bootstrap4</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <i className="fa fa-css3"></i>
            <h3>CSS</h3>
            <p>Built with the latest version of CSS3</p>
          </div>
        </div>
        <hr className="my-4" />
      </div>
      {/* <!--Welcome Section--> */}
      <div className="container-fluid padding">
        <div className="row welcome text-center">
          <div className="col-12">
            <h1 className="display-4">Base with ease.</h1>
          </div>
          <hr />
          <div className="col-12">
            <p className="lead">
              Welcome our Company and I hope you enjoy with our services.We have
              professional team and powerfully supply infrastructure and
              technical support.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid padding">
        <div className="row padding">
          <div className="col-md-12 col-lg-6">
            <h2>If you built it...</h2>
            <p>
              We provide with our analysit system to go integrated progress your
              business in Digital world. Data analysis is a process of
              inspecting, cleansing, transforming and modeling data with the
              goal of discovering useful information, informing conclusion and
              supporting decision-making.
            </p>
            <p>
              Data analysis has multiple facets and approaches, encompassing
              diverse techniques under a variety of names, and is used in
              different business, science, and social science domains. In
              today's business world, data analysis plays a role in making
              decisions more scientific and helping businesses operate more
              effectively.
            </p>
            <p>
              Analysis refers to breaking a whole into its separate components
              for individual examination. Data analysis is a process for
              obtaining raw data and converting it into information useful for
              decision-making by users. Data is collected and analyzed to answer
              questions, test hypotheses or disprove theories.There are several
              phases that can be distinguished, described below. The phases are
              iterative, in that feedback from later phases may result in
              additional work in earlier phases.
            </p>
            <br />
            <a href="#" className="btn btn-primary learn">
              Learn More
            </a>
          </div>
          <hr />
          <div className="col-lg-6">
            <img src={w4} className="img-fluid wp1" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;

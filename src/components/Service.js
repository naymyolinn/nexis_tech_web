import React from "react";
import Network from "../images/network.jpg";
import Server from "../images/srv.jpg";
import ELV from "../images/elv.png";
import App from "../images/app.png";

function Service() {
  return (
    <>
      <div className="container-fluid padding">
        <div className="row padding">
          <div className="col-md-12 col-lg-6">
            <h1>Network Services</h1>
            <p>
              The term server highlights the role of the machine in the
              traditional client–server scheme, where the clients are the
              workstations using the storage. A file server does not normally
              perform computational tasks or run programs on behalf of its
              client workstations. File servers are commonly found in schools
              and offices, where users use a local area network to connect their
              client computers.
            </p>
          </div>
          <hr />
          <div className="col-lg-6">
            <img src={Network} alt="network" style={{ height: "250px" }} />
          </div>
        </div>
        <br />
        <div className="row padding">
          <div className="col-md-12 col-lg-6">
            <h1>Server Services</h1>
            <p>
              The term server highlights the role of the machine in the
              traditional client–server scheme, where the clients are the
              workstations using the storage. A file server does not normally
              perform computational tasks or run programs on behalf of its
              client workstations. File servers are commonly found in schools
              and offices, where users use a local area network to connect their
              client computers.
            </p>
          </div>
          <hr />
          <div className="col-lg-6">
            <img
              src={Server}
              alt="server"
              style={{ height: "250px", width: "600px" }}
            />
          </div>
        </div>
        <br />
        <div className="row padding">
          <div className="col-md-12 col-lg-6">
            <h1>ELV Services</h1>
            <p>
              The term server highlights the role of the machine in the
              traditional client–server scheme, where the clients are the
              workstations using the storage. A file server does not normally
              perform computational tasks or run programs on behalf of its
              client workstations. File servers are commonly found in schools
              and offices, where users use a local area network to connect their
              client computers.
            </p>
          </div>
          <hr />
          <div className="col-lg-6">
            <img
              src={ELV}
              alt="elv"
              style={{ width: "600px", height: "200px" }}
            />
          </div>
        </div>
        <br />
        <div className="row padding">
          <div className="col-md-12 col-lg-6">
            <h1>Application Services</h1>
            <p>
              The term server highlights the role of the machine in the
              traditional client–server scheme, where the clients are the
              workstations using the storage. A file server does not normally
              perform computational tasks or run programs on behalf of its
              client workstations. File servers are commonly found in schools
              and offices, where users use a local area network to connect their
              client computers.
            </p>
          </div>
          <hr />
          <div className="col-lg-6">
            <img
              src={App}
              alt="application"
              style={{ width: "550px", height: "200px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;

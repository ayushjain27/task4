import React from "react";
import styles from "./Dashboard.module.css";

import { useNavigate } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { SiHomebrew } from "react-icons/si";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container my-5">
        <div className="row mb-4">
          <div className="col-md-7">
            <div className={`${styles.card} card h-100`}>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 m-auto">
                    <h3>
                      <SiHomebrew />
                    </h3>
                    <h3 className="card-title">Welcome, Username!</h3>
                    <p>
                      Get familiar with the dashboard, here are some ways to get
                      started.
                    </p>
                  </div>
                  <div className="col-md-6 m-auto">
                    <img
                      className={`${styles.img} img-fluid`}
                      src="./Images/dashboard.png"
                      width={250}
                      alt="dashboard"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className={`${styles.cardCarousel} card border-warning h-100`}>
              <div className="card-body">
                <Carousel
                  autoFocus={true}
                  emulateTouch={true}
                  infiniteLoop={true}
                  showStatus={false}
                  stopOnHover={true}
                  showThumbs={false}
                  autoPlay={true}
                >
                  <div>
                    <img
                      src="./Images/img-1.png"
                      className="img-fluid"
                      alt="img-1"
                    />
                  </div>
                  <div>
                    <img
                      src="./Images/img-2.png"
                      className="img-fluid"
                      alt="img-2"
                    />
                  </div>
                  <div>
                    <img
                      src="./Images/img-3.png"
                      className="img-fluid"
                      alt="img-3"
                    />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div className="d-grid col-md-6 mx-auto">
          <table className="table table-bordered text-center mb-5">
            <thead>
              <tr className="table-warning">
                <th scope="col">New Job Posted</th>
                <th scope="col">Total Job applied</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>15</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h5>What can you do today?</h5>
        <div className="d-flex flex-wrap gap-2 mt-3">
          <button
            onClick={() => navigate("/create")}
            className="btn btn-warning"
          >
            New Job Posted
          </button>
          <button
            onClick={() => navigate("/interaction")}
            className="btn btn-warning"
          >
            Job Applied
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

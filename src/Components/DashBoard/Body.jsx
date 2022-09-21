import { List } from "@material-ui/icons";
import React from "react";
import BarChartComponent from "./BarChartComponent";
import LineChartComponent from "./Line";
import DataGridDemo from "./Table";
// import { ChartLine } from "./ChartLine";

const Body = () => {
  return (
    <div className="mx-4">
      {/* CARDS DIV ********* */}

      <div className="row">
        <div className="col-sm-12">
          <div className="row">

          
        <div className="col-sm-3 mt-1 rounded">
          <div className="bg-light text-dark p-3 shadow-sm rounded">
            <div className="d-flex justify-content-between">
              <div>
                <h3>120</h3>
                <p>Total Menus</p>
              </div>

              <div className="">
                <List fontSize="large" />
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <p>0%</p>
              <p>10%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped"
                role="progressbar"
                style={{ width: "10%" }}
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>

        <div className="col-sm-3 mt-1 rounded">
          <div className="bg-light text-dark shadow-sm rounded p-3">
            <div className="d-flex justify-content-between">
              <div>
                <h3>180</h3>
                <p>Total Orders Today</p>
              </div>

              <div className="">
                <List fontSize="large" />
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <p>0%</p>
              <p>40%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped"
                role="progressbar"
                style={{ width: "40%" }}
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>

        <div className="col-sm-3 mt-1 rounded">
          <div className="bg-light text-dark shadow-sm rounded p-3">
            <div className="d-flex justify-content-between">
              <div>
                <h3>240</h3>
                <p>Total Client Today</p>
              </div>

              <div className="">
                <List fontSize="large" />
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <p>0%</p>
              <p>50%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>

        <div className="col-sm-3 mt-1 rounded">
          <div className="bg-light text-dark shadow-sm rounded p-3">
            <div className="d-flex justify-content-between">
              <div>
                <h3>140</h3>
                <p>Total Day Ratio</p>
              </div>

              <div className="">
                <List fontSize="large" />
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <p>0%</p>
              <p>90%</p>
            </div>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped bg-danger"
                role="progressbar"
                style={{ width: "90%" }}
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        </div>
        </div>

      </div>

      <div className="row">
        <div className="col-sm-12">
          <div className="row">

          
        <div className="col-sm-6 mt-3 ">
          <div className=" bg-white  p-3 d-flex justify-content-between">
            <h4 className="fw-bold">Revenue</h4>
            <div
              className="btn-group btn-group-sm shadow-sm"
              role="group"
              aria-label="Basic example"
            >
              <button type="button" className="btn btn-dark ">
                Mothely
              </button>
              <button type="button" className="btn btn-light ">
                Weekly
              </button>
              <button type="button" className="btn btn-light">
                Today
              </button>
            </div>
          </div>
          <div className="p-2 bg-white rounded" style={{ height: "300px" }}>
            <LineChartComponent />
          </div>
        </div>

        <div className="col-sm-6 mt-3 ">
          <div className=" bg-white  p-3 d-flex justify-content-between">
            <h4 className="fw-bold">Order Summary</h4>
            <div
              className="btn-group btn-group-sm shadow-sm"
              role="group"
              aria-label="Basic example"
            >
              <button type="button" className="btn btn-light ">
                Mothely
              </button>
              <button type="button" className="btn btn-dark ">
                Weekly
              </button>
              <button type="button" className="btn btn-light">
                Today
              </button>
            </div>
          </div>
          <div className="p-2 bg-white rounded" style={{ height: "300px" }}>
            <BarChartComponent />
          </div>
        
        </div>
        </div>
      </div>

      </div>

      <div className="col-sm-12">
        <div className="row">
      <div className="bg-white mt-3 rounded p-3"  >
        <div className="d-flex justify-content-between py-2">
          <h4 className="fw-bold">Order List</h4>
          <div
            className="btn-group btn-group-sm shadow-sm"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-dark ">
              Mothely
            </button>
            <button type="button" className="btn btn-light ">
              Weekly
            </button>
            <button type="button" className="btn btn-light">
              Today
            </button>
          </div>
        </div>
        <DataGridDemo />
     
        </div>

        </div>
      </div>
    </div>
  );
};

export default Body;

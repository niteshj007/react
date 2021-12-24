import React, { Component } from "react";
import Header from "../includes/header";
import Sidenav from "../includes/sidenav";
import Footer from "../includes/footer";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

export default class dashboard extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedin = true;
    if (token == null) {
      loggedin = false;
    }

    this.state = {
      loggedin,
    };
  }
  render() {
    if (this.state.loggedin === false) {
      return <Redirect to="/"></Redirect>;
    }
    return (
      <>
        <Header />
        <Sidenav />
        <main>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h1>Dashboard</h1>
                <nav
                  className="breadcrumb-container d-none d-sm-block d-lg-inline-block"
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb pt-0">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Library</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Data
                    </li>
                  </ol>
                </nav>
                <div className="separator mb-5"></div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="icon-cards-row">
                  <div className="glide dashboard-numbers">
                    <div className="glide__track" data-glide-el="track">
                      <ul className="glide__slides">
                        <li className="glide__slide">
                          <a href="#" className="card">
                            <div className="card-body text-center">
                              <i className="iconsminds-clock"></i>
                              <p className="card-text mb-0">Pending Orders</p>
                              <p className="lead text-center">16</p>
                            </div>
                          </a>
                        </li>
                        <li className="glide__slide">
                          <a href="#" className="card">
                            <div className="card-body text-center">
                              <i className="iconsminds-basket-coins"></i>
                              <p className="card-text mb-0">Completed Orders</p>
                              <p className="lead text-center">32</p>
                            </div>
                          </a>
                        </li>
                        <li className="glide__slide">
                          <a href="#" className="card">
                            <div className="card-body text-center">
                              <i className="iconsminds-arrow-refresh"></i>
                              <p className="card-text mb-0">Refund Requests</p>
                              <p className="lead text-center">2</p>
                            </div>
                          </a>
                        </li>
                        <li className="glide__slide">
                          <a href="#" className="card">
                            <div className="card-body text-center">
                              <i className="iconsminds-mail-read"></i>
                              <p className="card-text mb-0">New Comments</p>
                              <p className="lead text-center">25</p>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 mb-4">
                    <div className="card">
                      <div className="position-absolute card-top-buttons">
                        <button
                          className="btn btn-header-light icon-button"
                          type="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="simple-icon-refresh"></i>
                        </button>

                        <div className="dropdown-menu dropdown-menu-right mt-3">
                          <a className="dropdown-item" href="#">
                            Sales
                          </a>
                          <a className="dropdown-item" href="#">
                            Orders
                          </a>
                          <a className="dropdown-item" href="#">
                            Refunds
                          </a>
                        </div>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">Sales</h5>
                        <div className="dashboard-line-chart chart">
                          <canvas id="salesChart"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

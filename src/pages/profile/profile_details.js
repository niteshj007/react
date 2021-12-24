import React, { Component } from "react";
import Header from "../../includes/header";
import Sidenav from "../../includes/sidenav";
import Footer from "../../includes/footer";

export default class profile_details extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidenav />
        <main>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h1>Heading</h1>
                <nav
                  className="breadcrumb-container d-none d-sm-block d-lg-inline-block"
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb pt-0">
                    <li className="breadcrumb-item">
                      <a href="#">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Manage Profile</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Profile Details
                    </li>
                  </ol>
                </nav>
                <div className="separator mb-5"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="mb-4">Company Information</h5>
                    <div className="row">
                      <div className="col-xl-4">
                        <label htmlFor="Companylogo">Company Logo</label>
                        <div className="input-group">
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              id="inputGroupFile03"
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="inputGroupFile03"
                            >
                              Choose file
                            </label>
                          </div>
                        </div>
                        <div className="delete-logo-here">
                          <input
                            type="checkbox"
                            aria-label="Checkbox for following text input"
                          />
                          <span>Delete</span>
                        </div>
                        <div className="upload-logo-instructions">
                          <label htmlFor="logo-upload">
                            [File should be .jpg, .png, .gif format and file
                            size should not be more then 2 MB (2048 KB)) ( Best
                            image size 170X90]
                          </label>
                        </div>
                      </div>
                      <div className="col-xl-3">
                        <label htmlFor="current logo">Current Logo</label>
                        <div className="curr-logo-img">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/uploads/provider-logo/images/teluscare.png"
                            }
                            alt="current logo"
                            className="img-fluid shadow-2-strong hover-shadow"
                          />
                        </div>
                      </div>
                      <div className="col-xl-5">
                        <label htmlFor="company-desc">
                          Short Description
                          <span className="char-rest">
                            (260 characters allowed)
                          </span>
                        </label>
                        <div className="input-group">
                          <textarea
                            className="form-control"
                            aria-label="With textarea"
                            cols="40"
                            rows="4"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="profile-sec">
                      <div className="profile-main-heading">
                        <h5 className="mb-4">Unique Selling Point(USP)</h5>
                      </div>
                      <div className="profile-edit-sec">
                        <i className="simple-icon-note"></i>
                      </div>
                    </div>
                    <form>
                      <div className="row">
                        <div className="col-xl-4">
                          <div className="form-group position-relative error-l-50">
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                            <small className="form-text text-muted">
                              (60 Characters Allowed)
                            </small>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="form-group position-relative error-l-50">
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                            <small className="form-text text-muted">
                              (60 Characters Allowed)
                            </small>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="form-group position-relative error-l-50">
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                            <small className="form-text text-muted">
                              (60 Characters Allowed)
                            </small>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="form-group position-relative error-l-50">
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                            <small className="form-text text-muted">
                              (60 Characters Allowed)
                            </small>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="form-group position-relative error-l-50">
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                            <small className="form-text text-muted">
                              (60 Characters Allowed)
                            </small>
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Save
                      </button>
                      <button type="button" className="btn btn-success mb-1">
                        Update
                      </button>
                    </form>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="profile-sec">
                      <div className="profile-main-heading">
                        <h5 className="mb-4">Why Us ?</h5>
                      </div>
                      <div className="profile-edit-sec">
                        <i className="simple-icon-note"></i>
                      </div>
                    </div>
                    <form>
                      <div className="row">
                        <div className="col-xl-4">
                          <div className="form-group position-relative error-l-50">
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                            <small className="form-text text-muted">
                              (60 Characters Allowed)
                            </small>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="form-group position-relative error-l-50">
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                            <small className="form-text text-muted">
                              (60 Characters Allowed)
                            </small>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="form-group position-relative error-l-50">
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                            <small className="form-text text-muted">
                              (60 Characters Allowed)
                            </small>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="form-group position-relative error-l-50">
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                            <small className="form-text text-muted">
                              (60 Characters Allowed)
                            </small>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="form-group position-relative error-l-50">
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                            <small className="form-text text-muted">
                              (60 Characters Allowed)
                            </small>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="form-group position-relative error-l-50">
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                            <small className="form-text text-muted">
                              (60 Characters Allowed)
                            </small>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="form-group position-relative error-l-50">
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                            <small className="form-text text-muted">
                              (60 Characters Allowed)
                            </small>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="form-group position-relative error-l-50">
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                            <small className="form-text text-muted">
                              (60 Characters Allowed)
                            </small>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="form-group position-relative error-l-50">
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                            <small className="form-text text-muted">
                              (60 Characters Allowed)
                            </small>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="form-group position-relative error-l-50">
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                            <small className="form-text text-muted">
                              (60 Characters Allowed)
                            </small>
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Save
                      </button>
                      <button type="button" className="btn btn-success mb-1">
                        Update
                      </button>
                    </form>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="profile-sec">
                      <div className="profile-main-heading">
                        <h5 className="mb-4">Working Days And Hours</h5>
                      </div>
                      <div className="profile-edit-sec">
                        <i className="simple-icon-note"></i>
                      </div>
                    </div>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Check</th>
                          <th>Days</th>
                          <th>Start Time</th>
                          <th>End Time</th>
                          <th colSpan="2">Break Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              aria-label="Checkbox for following text input"
                            />
                          </td>
                          <td>Monday</td>
                          <td>
                            <input
                              type="time"
                              className="form-control timepick"
                              defaultValue=""
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              defaultValue=""
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              placeholder="From"
                              defaultValue=""
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              placeholder="To"
                              defaultValue=""
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              aria-label="Checkbox for following text input"
                            />
                          </td>
                          <td>Tuesday</td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              defaultValue=""
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              defaultValue=""
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              placeholder="From"
                              defaultValue=""
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              placeholder="To"
                              defaultValue=""
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              aria-label="Checkbox for following text input"
                            />
                          </td>
                          <td>Wednesday</td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              defaultValue=""
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              defaultValue=""
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              placeholder="From"
                              defaultValue=""
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              placeholder="To"
                              defaultValue=""
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              aria-label="Checkbox for following text input"
                            />
                          </td>
                          <td>Thrusday</td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              defaultValue=""
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              defaultValue=""
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              placeholder="From"
                              defaultValue=""
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              placeholder="To"
                              defaultValue=""
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              aria-label="Checkbox for following text input"
                            />
                          </td>
                          <td>Friday</td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              defaultValue=""
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              defaultValue=""
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              placeholder="From"
                              defaultValue=""
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              placeholder="To"
                              defaultValue=""
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              aria-label="Checkbox for following text input"
                            />
                          </td>
                          <td>Saturday</td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              defaultValue=""
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              defaultValue=""
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              placeholder="From"
                              defaultValue=""
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              placeholder="To"
                              defaultValue=""
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              aria-label="Checkbox for following text input"
                            />
                          </td>
                          <td>Sunday</td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              defaultValue=""
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              defaultValue=""
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              placeholder="From"
                              defaultValue=""
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control timepick"
                              placeholder="To"
                              defaultValue=""
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="profile-sec">
                      <div className="profile-main-heading">
                        <h5 className="mb-4">
                          Payment Mode (type of payment you accept)
                        </h5>
                      </div>
                      <div className="profile-edit-sec">
                        <i className="simple-icon-note"></i>
                      </div>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        defaultValue="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1"
                      >
                        Wallet
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        defaultValue="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1"
                      >
                        Online Payment
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        defaultValue="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1"
                      >
                        Cash On Service
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        defaultValue="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1"
                      >
                        By Cheque
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        defaultValue="option1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineCheckbox1"
                      >
                        Bank Transfer
                      </label>
                    </div>
                    <p> Admin Verification Required</p>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="profile-sec">
                      <div className="profile-main-heading">
                        <h5 className="mb-4">Sister Company Details</h5>
                      </div>
                      <div className="profile-edit-sec">
                        <i className="simple-icon-note"></i>
                      </div>
                    </div>
                    <form>
                      <div className="form-row">
                        <div className="form-group col-md-3">
                          <label htmlFor="inputName">Name</label>
                          <input
                            type="name"
                            className="form-control"
                            id="inputName"
                            placeholder="Name"
                          />
                        </div>
                        <div className="form-group col-md-3">
                          <label htmlFor="inputName">Trade Licence</label>
                          <div className="input-group">
                            <div className="custom-file">
                              <input
                                type="file"
                                className="custom-file-input"
                                id="inputGroupFile03"
                              />
                              <label
                                className="custom-file-label"
                                htmlFor="inputGroupFile03"
                              >
                                Choose file
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md-3">
                          <label htmlFor="inputTradeLicense">
                            Trade License No
                          </label>
                          <input
                            type="string"
                            className="form-control"
                            id="inputTradeLicense"
                            placeholder="Trade License No"
                          />
                        </div>
                        <div className="form-group col-md-3">
                          <label htmlFor="inputExpiryDate">Expiry Date</label>
                          <input
                            type="date"
                            className="form-control"
                            id="inputExpiryDate"
                            placeholder="Expiry Date"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary d-block mt-3"
                      >
                        Sign in
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

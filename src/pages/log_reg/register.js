import react, { Component } from "react";
import { Link } from "react-router-dom";

import "./bootstrap-float-label.min.css";
import $ from "jquery";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      providerType: 2,
    };
  }

  providerTypehandler(event) {
    this.setState({ providerType: event });
  }

  regformsubmit(e) {
    e.preventDefault();
    const formData = e.target.form;
    console.log(formData);
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="comp-logo text-center">
                <span className="logo-single"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="card mb-4">
            <div className="card-body">
              <form onSubmit={this.regformsubmit}>
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex mb-4">
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          id="individual"
                          name="provider_type"
                          className="custom-control-input"
                          value="1"
                          checked={this.state.providerType === 1}
                          onClick={(e) => this.providerTypehandler(1)}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="individual"
                        >
                          Individual
                        </label>
                      </div>
                      &nbsp;&nbsp;
                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          id="company"
                          name="customRadio"
                          className="custom-control-input"
                          value="2"
                          checked={this.state.providerType === 2}
                          onClick={(e) => this.providerTypehandler(2)}
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="company"
                        >
                          Company
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label className="form-group has-float-label mb-4">
                      <input
                        id="company_name"
                        className="form-control"
                        name="company_name"
                      />
                      <span>Company Name</span>
                    </label>
                  </div>
                  <div className="col-md-3">
                    <label className="form-group has-float-label mb-4">
                      <input id="email" className="form-control" name="email" />
                      <span>E-mail</span>
                    </label>
                  </div>
                  <div className="col-md-3">
                    <label className="form-group has-float-label mb-4">
                      <input className="form-control" />
                      <span>Password</span>
                    </label>
                  </div>
                  <div className="col-md-3">
                    <label className="form-group has-float-label mb-4">
                      <input className="form-control" />
                      <span>Mobile No.</span>
                    </label>
                  </div>
                  <div className="col-md-3">
                    <label className="form-group has-float-label mb-4">
                      <input className="form-control" />
                      <span>Landline No.</span>
                    </label>
                  </div>
                  <div className="col-md-3">
                    <label className="form-group has-float-label mb-4">
                      <input className="form-control" />
                      <span>Contact Person Name</span>
                    </label>
                  </div>
                  <div className="col-md-3">
                    <label className="form-group has-float-label mb-4">
                      <input className="form-control datepicker" />
                      <span>Establishment Date</span>
                    </label>
                  </div>
                  <div className="col-md-3">
                    <label className="form-group has-float-label mb-4">
                      <input className="form-control" />
                      <span>Fax No.</span>
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label className="form-group has-float-label">
                      <select
                        className="form-control select2-single"
                        data-width="100%"
                      >
                        <option value="">Select</option>
                        <option value="IN">India</option>
                        <option value="UAE">United Arab Emirate</option>
                      </select>
                      <span>Country</span>
                    </label>
                  </div>
                  <div className="col-md-3">
                    <label className="form-group has-float-label">
                      <select
                        className="form-control select2-single"
                        data-width="100%"
                      ></select>
                      <span>State</span>
                    </label>
                  </div>
                  <div className="col-md-3">
                    <label className="form-group has-float-label">
                      <select
                        className="form-control select2-single"
                        data-width="100%"
                      ></select>
                      <span>Sub City</span>
                    </label>
                  </div>
                  <div className="col-md-3">
                    <label className="form-group has-float-label mb-4">
                      <input className="form-control" />
                      <span>Post Box</span>
                    </label>
                  </div>
                  <div className="col-md-3">
                    <label className="form-group has-float-label">
                      <select
                        className="form-control select2-single"
                        data-width="100%"
                      >
                        <option label="&nbsp;">&nbsp;</option>
                        <option value="TPZ">The Panic Zone</option>
                        <option value="TTZ">The Twilight Zone</option>
                      </select>
                      <span>Service</span>
                    </label>
                  </div>
                </div>
                {/* file attachments type 2 */}
                {this.state.providerType === 2 && (
                  <div className="row">
                    <div className="col-md-4">
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Trade License
                          </span>
                        </div>
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            id="trade-license"
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="trade-license"
                          ></label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Establishment Card
                          </span>
                        </div>
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            id="esta-card"
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="esta-card"
                          ></label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Authorise Person Emirates Id
                          </span>
                        </div>
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            id="authId"
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="authId"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* file attachments type 1 */}
                {this.state.providerType === 1 && (
                  <div className="row">
                    <div className="col-md-3">
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Emirate id front
                          </span>
                        </div>
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            id="emirate-front"
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="emirate-front"
                          ></label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Emirate id back
                          </span>
                        </div>
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            id="emirate-back"
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="emirate-back"
                          ></label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Passport front
                          </span>
                        </div>
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            id="pass-front"
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="pass-front"
                          ></label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            Passport back
                          </span>
                        </div>
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            id="pass-back"
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="pass-back"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="row">
                  <div className="col-12">
                    <div className="custom-control custom-checkbox mb-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="isagree"
                        value="1"
                      />
                      <label className="custom-control-label" htmlFor="isagree">
                        Check this custom checkbox
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 text-right">
                    <button
                      className="btn btn-primary btn-lg btn-shadow"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>
              <div>
                <hr />
                <div className="register-div">
                  <Link to="/" className="btn-link">
                    <i className="simple-icon-user-follow"></i> Have account
                    login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;

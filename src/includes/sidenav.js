import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidenav = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className="menu">
      <div className="main-menu">
        <div className="scroll">
          <ul className="list-unstyled">
            <li className={splitLocation[1] === "dashboard" ? "active" : ""}>
              <Link to="/dashboard">
                <i className="iconsminds-shop-4"></i>
                <span>Dashboards</span>
              </Link>
            </li>
            <li className={splitLocation[1] === "profile" ? "active" : ""}>
              <a href="#profile">
                <i className="iconsminds-digital-drawing"></i> Manage Profile
              </a>
            </li>
            <li>
              <a href="#rate">
                <i className="iconsminds-coins"></i> Manage Rate
              </a>
            </li>
            <li>
              <a href="#products-quotations">
                <i className="iconsminds-pantone"></i> Products &amp; Quotations
              </a>
            </li>
            <li>
              <a href="#sales">
                <i className="iconsminds-air-balloon-1"></i> Sales &amp;
                Marketing
              </a>
            </li>
            <li>
              <a href="#operations">
                <i className="simple-icon-organization"></i> Manage Operations
              </a>
            </li>
            <li>
              <a href="#hr">
                <i className="iconsminds-conference"></i> Manage HR
              </a>
            </li>
            <li>
              <a href="#accounts">
                <i className="iconsminds-bank"></i> Accounts
              </a>
            </li>
            <li>
              <a href="#post-sales">
                <i className="iconsminds-pantone"></i> Post Sales Service
              </a>
            </li>
            <li>
              <a href="#customer-care">
                <i className="iconsminds-support"></i> Customer Care
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="sub-menu">
        <div className="scroll">
          <ul className="list-unstyled" data-link="profile" id="profile">
            <li
              className={splitLocation[2] === "profile-details" ? "active" : ""}
            >
              <Link to="/profile/profile-details">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">Profile Details</span>
              </Link>
            </li>
            <li
              className={splitLocation[2] === "account-details" ? "active" : ""}
            >
              <Link to="/profile/account-details">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">Account Details</span>
              </Link>
            </li>
            <li>
              <a href="#">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">Documents</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">Change Password</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">
                  Plan Details &amp; Payment
                </span>
              </a>
            </li>
          </ul>

          <ul className="list-unstyled" data-link="rate" id="rate">
            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#insurance-menu"
                aria-expanded="false"
                aria-controls="insurance-menu"
                className="rotate-arrow-icon opacity-50 collapsed"
              >
                <i className="simple-icon-arrow-down"></i>{" "}
                <span className="d-inline-block">Insurance</span>
              </a>
              <div id="insurance-menu" className="collapse">
                <ul className="list-unstyled inner-level-menu">
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Health Insurance</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Motor Insurance</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#facility-menu"
                aria-expanded="false"
                aria-controls="facility-menu"
                className="rotate-arrow-icon opacity-50 collapsed"
              >
                <i className="simple-icon-arrow-down"></i>{" "}
                <span className="d-inline-block">Facility Service</span>
              </a>
              <div id="facility-menu" className="collapse">
                <ul className="list-unstyled inner-level-menu">
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Cleaning Service</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Pest Control</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Techinical</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#vehicle-service"
                aria-expanded="false"
                aria-controls="vehicle-service"
                className="rotate-arrow-icon opacity-50 collapsed"
              >
                <i className="simple-icon-arrow-down"></i>{" "}
                <span className="d-inline-block">Vehicle Service</span>
              </a>
              <div id="vehicle-service" className="collapse">
                <ul className="list-unstyled inner-level-menu">
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Vehicle Servicing</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Car Wash</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Car Tow</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <ul
            className="list-unstyled"
            data-link="products-quotations"
            id="products-quotations"
          >
            <li>
              <a href="#">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">Add Products</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">View Products</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">Manage Quotes</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">Book Quotation</span>
              </a>
            </li>
          </ul>

          <ul className="list-unstyled" data-link="sales" id="sales">
            <li>
              <a href="#">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">Manage Enquiry</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#promotion-offers"
                aria-expanded="false"
                aria-controls="promotion-offers"
                className="rotate-arrow-icon opacity-50 collapsed"
              >
                <i className="simple-icon-arrow-down"></i>{" "}
                <span className="d-inline-block">Promotions &amp; Offers</span>
              </a>
              <div id="promotion-offers" className="collapse">
                <ul className="list-unstyled inner-level-menu">
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Coupons</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Offers</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#crm"
                aria-expanded="false"
                aria-controls="crm"
                className="rotate-arrow-icon opacity-50 collapsed"
              >
                <i className="simple-icon-arrow-down"></i>{" "}
                <span className="d-inline-block">CRM</span>
              </a>
              <div id="crm" className="collapse">
                <ul className="list-unstyled inner-level-menu">
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Existing CM</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Add New CM</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Renewal Summary</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <ul className="list-unstyled" data-link="operations" id="operations">
            <li>
              <a href="#">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">Operation Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#employe-task-menu"
                aria-expanded="false"
                aria-controls="employe-task-menu"
                className="rotate-arrow-icon opacity-50 collapsed"
              >
                <i className="simple-icon-arrow-down"></i>{" "}
                <span className="d-inline-block">Employee Task</span>
              </a>
              <div id="employe-task-menu" className="collapse">
                <ul className="list-unstyled inner-level-menu">
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">check Avaibility</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Schedule (List)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">
                        Schedule (Calander)
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Add Supervisor</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Emp TAT Task</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#order-management-menu"
                aria-expanded="false"
                aria-controls="order-management-menu"
                className="rotate-arrow-icon opacity-50 collapsed"
              >
                <i className="simple-icon-arrow-down"></i>{" "}
                <span className="d-inline-block">Order Managment</span>
              </a>
              <div id="order-management-menu" className="collapse">
                <ul className="list-unstyled inner-level-menu">
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Online Order</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Offline Order</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Coupon Order</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#expense-menu"
                aria-expanded="false"
                aria-controls="expense-menu"
                className="rotate-arrow-icon opacity-50 collapsed"
              >
                <i className="simple-icon-arrow-down"></i>{" "}
                <span className="d-inline-block">Expense</span>
              </a>
              <div id="expense-menu" className="collapse">
                <ul className="list-unstyled inner-level-menu">
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Petty Cash</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Rent of Branch</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Utility Payment</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Stationary</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a
                href="#"
                data-toggle="collapse"
                data-target="#schedule-menu"
                aria-expanded="false"
                aria-controls="schedule-menu"
                className="rotate-arrow-icon opacity-50 collapsed"
              >
                <i className="simple-icon-arrow-down"></i>{" "}
                <span className="d-inline-block">Sevice Schedules</span>
              </a>
              <div id="schedule-menu" className="collapse">
                <ul className="list-unstyled inner-level-menu">
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Health Insurance</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Motor Insurance</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Cleaning Service</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Pest Control</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Techinical Service</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Vehicle Service</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Car Wash</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="simple-icon-link"></i>{" "}
                      <span className="d-inline-block">Car Tow</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <ul className="list-unstyled" data-link="hr" id="hr">
            <li>
              <a href="#">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">HR Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">Add Employee</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">Add Employee Bulk</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">Employee Listing</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">Attendance</span>
              </a>
            </li>
          </ul>

          <ul className="list-unstyled" data-link="accounts" id="accounts">
            <li>
              <a href="">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">Accounts Dashboard</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">Wallet</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">Manage Payment</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">Payment History</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">Order Transaction</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">Statement of Account</span>
              </a>
            </li>
          </ul>

          <ul className="list-unstyled" data-link="post-sales" id="post-sales">
            <li>
              <a href="">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">Review</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">Send Emergency Message</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">Reffer Offer &amp; Earn</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">Reffer Friend &amp; Earn</span>
              </a>
            </li>
          </ul>

          <ul
            className="list-unstyled"
            data-link="customer-care"
            id="customer-care"
          >
            <li>
              <a href="">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">Complain</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">Queires</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="simple-icon-link"></i>{" "}
                <span className="d-inline-block">Suggestions</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;

import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
function withNavigate(Component) {
  return function WrapperComponent(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}

class HomePage extends Component {
  handleLogin = () => {
    const { navigate } = this.props;
    navigate("/login");
  };

  render() {
    return (
      <>
        <div className="d-flex justify-content-between align-items-center p-5 pt-3">
          <img
            src="src/assets/blue-logo.jpg"
            style={{ width: "136px", height: "40px", marginLeft: "100px" }}
            alt="Logo"
          />
          <div className="me-5">
            <button
              className="btn btn-white m-2 shadow"
              style={{ borderRadius: "25px", padding: "10px 30px" }}
              onClick={this.handleLogin}
            >
              Biz Login
            </button>

            <button
              className="btn btn-danger m-2 shadow"
              style={{ borderRadius: "25px", padding: "10px 30px" }}
              onClick={this.handleLogin}
            >
              Login
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-around align-items-center pe-5 pt-1">
          <div className="w-50" style={{ paddingLeft: "150px" }}>
            <h1 className="fs-3">Take care of your home needs now!</h1>
            <p className="font-family:roboto w-75" style={{ color: "#525F7F" }}>
              ServicePro is your one-stop solution to troubleshoot, choose a
              vendor and book a technician.
            </p>
            <select
              className="form-select w-25"
              onChange={this.handleLocationChange}
            >
              <option value="" disabled selected>
                Select Location
              </option>
              <option value="User">Pune</option>
              <option value="Businessman">Mumbai</option>
            </select>
            <div className="d-flex justify-content-start align-items-center gap-3">
              <input
                type="search"
                className="form-control  mt-3 p-2"
                style={{ width: "300px" }}
                placeholder="Search Home Appliances"
              />
              <button className="btn btn-danger pt-2 pb-2 mt-3">Search</button>
            </div>
          </div>
          <img
            src="src/assets/home-Page-img.png"
            className="pe-5"
            style={{ height: "300px" }}
          />
        </div>
        <div style={{ paddingLeft: "200px", paddingTop: "50px" }}>
          <h1>All Services</h1>
          <p>
            The time is now for it to be okay to be great. For being a bright
            color. For standing out.
          </p>
        </div>
        <ul className="d-flex justify-content-center align-items-center flex-wrap gap-5 w-100 pt-5">
          <li className=" d-flex flex-column justify-content-center align-items-start w-25 gap-2">
            <img src="src/assets/refrigerator-thin 1.png" alt="Fridge" />
            <h3>Fridge</h3>
            <p>
              We get insulted by others, lose trust for those others. We get
              back stabbed by friends. It becomes harder for us to give others a
              hand.
            </p>
          </li>
          <li className="d-flex flex-column justify-content-center align-items-start w-25 gap-2">
            <img src="src/assets/air conditionar.png" alt="Air Conditioner" />
            <h3>Air Conditioner</h3>
            <p>
              Don't get your heart broken by people we love, even that we give
              them all we have. Then we lose family over time. As we live, our
              hearts turn colder.
            </p>
          </li>
          <li className="d-flex flex-column justify-content-center align-items-start w-25 gap-2">
            <img src="src/assets/telivision.png" alt="Television" />
            <h3>Television</h3>
            <p>
              What else could rust the heart more over time? Blackgold. The time
              is now for it to be okay to be great. or being a bright color. For
              standing out.
            </p>
          </li>
          <li className="d-flex flex-column justify-content-center align-items-start w-25 gap-2">
            <img src="src/assets/fire-burner-thin 1.png" alt="Gas Stove" />
            <h3>Gas Stove</h3>
            <p>
              We get insulted by others, lose trust for those others. We get
              back stabbed by friends. It becomes harder for us to give others a
              hand.
            </p>
          </li>
          <li className="d-flex flex-column justify-content-center align-items-start w-25 gap-2">
            <img src="src/assets/air conditionar.png" alt="Air Conditioner" />
            <h3>Air Conditioner</h3>
            <p>
              Don't get your heart broken by people we love, even that we give
              them all we have. Then we lose family over time. As we live, our
              hearts turn colder.
            </p>
          </li>
          <li className="d-flex flex-column justify-content-center align-items-start w-25 gap-2">
            <img src="src/assets/telivision.png" alt="Television" />
            <h3>Television</h3>
            <p>
              What else could rust the heart more over time? Blackgold. The time
              is now for it to be okay to be great. or being a bright color. For
              standing out.
            </p>
          </li>
        </ul>
        <div className="pt-5">
          <h1 style={{ textAlign: "center" }} className="font-Open Sans">
            Book a request in 3 simple steps
          </h1>
          <ul className="d-flex justify-content-center align-items-center flex-wrap gap-5 w-100 pt-5">
            <li className=" d-flex flex-column justify-content-center align-items-center text-center w-25 gap-2">
              <img src="src/assets/undraw_forms.png" alt="Fridge" />
              <h3>Provide your appliance details</h3>
              <p>Let us know your appliance details and your issue.</p>
            </li>
            <li className="d-flex flex-column justify-content-center align-items-center text-center w-25 gap-2">
              <img
                src="src/assets/Choose-your-technician.png"
                alt="Air Conditioner"
              />
              <h3>Choose your technician</h3>
              <p>Choose from a wide variety of technicians and vendors.</p>
            </li>
            <li className="d-flex flex-column justify-content-center align-items-center text-center w-25 gap-2">
              <img src="src/assets/undraw_certification.png" alt="Television" />
              <h3>Get it fixed!</h3>
              <p>
                The technician will arrive at your doorstep shortly to fix it!
              </p>
            </li>
          </ul>
        </div>
        <div className="ps-5">
          <h1 style={{ paddingLeft: "100px", paddingTop: "50px" }}>
            Featured Vendors
          </h1>
          <ul className="d-flex justify-content-center align-items-center flex-wrap gap-5 w-100 pt-5">
            <li className=" d-flex flex-column justify-content-center align-items-start text-center w-25 gap-2 shadow p-2 rounded">
              <div className="d-flex justify-content-center align-items-start text-center">
                <img
                  src="src/assets/Avatar.png"
                  alt="Fridge"
                  style={{ height: "60px" }}
                />
                <h3 className="fs-5">Metro Hardware</h3>
                <p className="align-slef-end text-primary ms-3">Show More</p>
              </div>
              <ul className="d-flex justify-content-center align-items-center text-center gap-2">
                <li className="d-flex flex-column">
                  <p className="fw-bold text-dark">22</p>
                  <p className="fw-medium text-secondary">Services</p>
                </li>
                <li>
                  <p className="fw-bold text-dark">8/10</p>
                  <p className="fw-medium text-secondary">Rating</p>
                </li>
                <li>
                  <p className="fw-bold text-dark">89</p>
                  <p className="fw-medium text-secondary">Reviews</p>
                </li>
              </ul>
            </li>
            <li className="d-flex flex-column justify-content-center align-items-start text-center w-25 gap-2 shadow p-2 rounded">
              <div className="d-flex justify-content-center align-items-start text-center">
                <img
                  src="src/assets/Avatar.png"
                  alt="Fridge"
                  style={{ height: "60px" }}
                />
                <h3 className="fs-5">Metro Hardware</h3>
                <p className="align-slef-end text-primary ms-3">Show More</p>
              </div>
              <ul className="d-flex justify-content-center align-items-center text-center gap-2">
                <li className="d-flex flex-column">
                  <p className="fw-bold text-dark">22</p>
                  <p className="fw-medium text-secondary">Services</p>
                </li>
                <li>
                  <p className="fw-bold text-dark">8/10</p>
                  <p className="fw-medium text-secondary">Rating</p>
                </li>
                <li>
                  <p className="fw-bold text-dark">89</p>
                  <p className="fw-medium text-secondary">Reviews</p>
                </li>
              </ul>
            </li>
            <li className="d-flex flex-column justify-content-center align-items-start text-center w-25 gap-2 shadow p-2 rounded">
              <div className="d-flex justify-content-center align-items-start text-center">
                <img
                  src="src/assets/Avatar.png"
                  alt="Fridge"
                  style={{ height: "60px" }}
                />
                <h3 className="fs-5 ">Metro Hardware</h3>
                <p className="align-slef-end text-primary ms-4">Show More</p>
              </div>
              <ul className="d-flex justify-content-center align-items-center text-center gap-2">
                <li className="d-flex flex-column">
                  <p className="fw-bold text-dark">22</p>
                  <p className="fw-medium text-secondary">Services</p>
                </li>
                <li>
                  <p className="fw-bold text-dark">8/10</p>
                  <p className="fw-medium text-secondary">Rating</p>
                </li>
                <li>
                  <p className="fw-bold text-dark">89</p>
                  <p className="fw-medium text-secondary">Reviews</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="m-5">
          <h2 className="text-center m-5">
            See what our happy customers have to say about us
          </h2>
          <ul className="gap-2 shadow p-2 rounded  d-flex  justify-content-around align-items-start text-center">
            <li className="d-flex flex-column justify-content-center align-items-start text-center w-25">
              <div className="d-flex justify-content-center align-items-start align-items-start gap-2 p-2">
                <img
                  src="src/assets/google.png"
                  alt="Fridge"
                  style={{ height: "60px" }}
                />
                <div className="text-start">
                  <h3 className="fs-5 ">Metro Hardware</h3>
                  <p className="text-secondary">3 days ago</p>
                </div>
                <img src="src/assets/google_stars.png" className="pt-1" />
              </div>
              <p style={{ paddingLeft: "80px", textAlign: "start" }}>
                Knowledgeable and easy to work with. They make Instagram easy
                for those of us who aren’t that savvy. Growth has been great and
                the followers have been quality. Couldn’t be happier.
              </p>
            </li>
            <li className="d-flex flex-column justify-content-center align-items-start text-center w-25">
              <div className="d-flex justify-content-center align-items-start align-items-start gap-2 p-2">
                <img
                  src="src/assets/google.png"
                  alt="Fridge"
                  style={{ height: "60px" }}
                />
                <div className="text-start">
                  <h3 className="fs-5 ">Metro Hardware</h3>
                  <p className="text-secondary">3 days ago</p>
                </div>
                <img src="src/assets/google_stars.png" className="pt-1" />
              </div>
              <p style={{ paddingLeft: "80px", textAlign: "start" }}>
                Knowledgeable and easy to work with. They make Instagram easy
                for those of us who aren’t that savvy. Growth has been great and
                the followers have been quality. Couldn’t be happier.
              </p>
            </li>
            <li className="d-flex flex-column justify-content-center align-items-start text-center w-25">
              <div className="d-flex justify-content-center align-items-start align-items-start gap-2 p-2">
                <img
                  src="src/assets/google.png"
                  alt="Fridge"
                  style={{ height: "60px" }}
                />
                <div className="text-start">
                  <h3 className="fs-5 ">Metro Hardware</h3>
                  <p className="text-secondary">3 days ago</p>
                </div>
                <img src="src/assets/google_stars.png" className="pt-1" />
              </div>
              <p style={{ paddingLeft: "80px", textAlign: "start" }}>
                Knowledgeable and easy to work with. They make Instagram easy
                for those of us who aren’t that savvy. Growth has been great and
                the followers have been quality. Couldn’t be happier.
              </p>
            </li>
          </ul>
        </div>
        {/* // fotter */}
        {/* <div className="d-flex justify-content-around align-items-center text-center bg-dark" style={{height:"300px",backgroundColor:"#000000"}} >
<div>
  <div className="shadow  p-3 m-5">
  <div className="d-flex justify-content-start align-items-center gap-3" style={{width:"1000px",height:"100px"}}> 
  <div >
<p className="text-white">Get in touch with us</p>
<div className="d-flex rounded-0">
<input type="email" className="form-control w-100 p-2" placeholder="Email address"/>
<button className="btn btn-danger"><i class="fa-solid fa-arrow-right"></i></button>
</div>
</div>
<p className="text-secondary w-25">Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
</div>
  </div>

<button
              className="btn btn-danger m-2 shadow"
              style={{ borderRadius: "25px", padding: "10px 30px" }}
            >
              Book a Service
            </button>
            <ul className="text-white fst-italic fw-medum">
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Bissiness Login</li>
            </ul>
</div>
        </div>*/}
        <div className="footer-container">
          <div className="d-flex justify-content-around align-items-center">
            <div className="email-container shadow bg-dark   p-3 m-5">
              <div
                className="d-flex justify-content-start align-items-center gap-3"
                style={{ width: "1000px", height: "100px" }}
              >
                <div>
                  <p className="text-white">Get in touch with us</p>
                  <div className="d-flex rounded-0">
                    <input
                      type="email"
                      className="form-control w-100 p-2"
                      placeholder="Email address"
                    />
                    <button className="btn btn-danger">
                      <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
                <p className="text-secondary w-25 p-2">
                  Hello, we are Lift Media. Our goal is to translate the
                  positive effects from revolutionizing how companies engage
                  with their clients & their team.
                </p>
              </div>
            </div>
            <button
              className="btn btn-danger m-2 shadow"
              style={{ borderRadius: "25px", padding: "10px 30px" }}
            >
              Book a Service
            </button>
            <ul className="text-white fst-italic fw-medium">
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Business Login</li>
            </ul>
            </div>
            <hr style={{borderWidth:"2px",width:"80%",marginLeft:"auto",marginRight:"auto"}}/>
            <div className="d-flex justify-content-between align-items-center ps-5 pe-5 mb-3">
            <img src="src/assets/Logo.png" style={{height:"30px",paddingLeft:"100px"}}/>
            <div className="d-flex pe-5 gap-3">
            <i class="fa-brands fa-linkedin-in" style={{border:"2px solid gray",padding:"10px",borderRadius:"50%"}}></i>
            <i class="fa-brands fa-facebook" style={{border:"2px solid gray",padding:"10px",borderRadius:"50%"}}></i>
            <i class="fa-brands fa-github" style={{border:"2px solid gray",padding:"10px",borderRadius:"50%"}}></i>
            </div>
            </div>
        </div>
      </>
    );
  }
}

export default withNavigate(HomePage);

 import main1 from "../assets/mainprep.jpg";
import ps from "../assets/google-play-store.svg";
import { Link } from "react-router-dom";
import Subscroption from "./Subscroption";
import Download from "./Download";
import AllCourses from "./AllCourses";
import Testimonials from "./Testimonial";
import PrepAceContent from "./PrepAceContent";
const Home = () => {
  return (
    <div className="all">
      <div className="container col-xxl-8 px-1 py-0">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-3">
          <div className="col-10 col-sm-8 mx-auto col-lg-6">
            <img
              src={main1}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="500"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-4 font-bold  text-body-emphasis lh-1 mb-1">
              Learn Today <br />
              Lead Tomorrow
            </h1>
            <p className="text-3xl    text-[#31baa0]">
              With India's Learning App
            </p>


<p className=" text-xl text-gray-500 pt-16">Download our app & discover PrepAce's <br /> revolutionary way of learning!

</p>
<div className="d-grid gap-2  d-md-flex justify-content-md-start">
              <form className="banner-newsletter flex " id="test-form-banner">
                <div className="inputbox">
                  <span style={{ width: "max-content" }}>+91</span>
                  <input
                    type="tel"
                    className="mobNumber2"
                    placeholder="Enter your 10 digit mobile number"
                    pattern="^[6-9]{1}\d{9}$"
                    required
                    maxLength="10"
                    autoComplete="off"
                    value=""
                  />
                </div>
                <div className="submitbtn-dwnapp">
                  <button value="Get link" className="ripple">
                    Get link
                  </button>
                  <a href="https://adda247.app.link/webinstall"></a>
                  <div className="loader">
                    <div className="loading"></div>
                  </div>
                </div>
              </form>
              
             
            </div>
            <Link to='/'>
            <img src={ps} alt="" />
            </Link>
          </div>
        </div>
      </div>
<AllCourses></AllCourses>
   <Subscroption></Subscroption>
   <Testimonials></Testimonials>

<Download></Download>
<PrepAceContent></PrepAceContent>
     </div>
  );
};

export default Home;

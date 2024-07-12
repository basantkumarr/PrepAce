import { useState } from "react";
import logo from "../assets//prepace-high-resolution-logo-transparent (1).png";
import { Link } from "react-router-dom";
 import { MdOutlineKeyboardArrowRight } from "react-icons/md";
 import { MdOutlineLogin } from "react-icons/md";
import LoginModel from "./LoginModel";
 
const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const w3_open = () => {
    setSidebarOpen(true);
  };

  const w3_close = () => {
    setSidebarOpen(false);
  };


  return (
    <div className="min-h-full sticky z-50 shadow-sm   top-0">
      {/* WhatsApp button */}
      <div className="dropdown position-fixed bottom-0 end-0 mb-4 me-3 bd-mode-toggle">
        <a href="https://wa.me/918295837464" target="_blank" rel="noopener noreferrer">
          <button
            className="btn btn-bd-primary py-2 d-flex align-items-center bg-green-500"
            id="bd-theme"
            type="button"
            aria-label="Toggle theme (light)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="white"
              className="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
          </button>
        </a>
      </div>

      <div className="w-full all px-8 shadow-sm" style={{ backgroundColor: "white" }}>
        <header style={{ backgroundColor: "white" }} className="border-bottom w-full lh-1 py-1">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-0">
              <div>
                <div
                  className={`w3-sidebar w3-bar-block   ${sidebarOpen ? "w3-show" : "w3-hide"}`}
                  style={{ zIndex: 5 }}
                  id="mySidebar"
                >
                  <button
                    className="w3-bar-item d-flex w3-button w3-xxlarge font-semibold text-gray-600"
                    onClick={w3_close}
                  >
                    Close
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="currentColor"
                      className="bi pt-1 bi-x-lg pb-1 bold"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                  </button>
                  <hr />
                  <Link to="/" onClick={w3_close} className="w3-item mt-3 w3-button">
                    Home
                  </Link>
                  <Link to="/shop" onClick={w3_close} className="w3-item w3-button">
                    Govt. job exams
                  </Link>
                  <Link to="/tshirt" onClick={w3_close} className="w3-item w3-button">
                    State news
                  </Link>
                  <Link to="/jacket" onClick={w3_close} className="w3-item w3-button">
                    Jee exam
                  </Link>
                  <Link to="/jogger" onClick={w3_close} className="w3-item w3-button">
                    Gate exam
                  </Link>
                  <Link to="/tshirt" onClick={w3_close} className="w3-item w3-button">
                    UG & PG
                  </Link>
                  <Link to="/women" onClick={w3_close} className="w3-item w3-button">
                 Enterance test
                  </Link>
                  <Link to="/contact" onClick={w3_close} className="w3-item w3-button">
                    Contact Us
                  </Link>
                  <Link to="/about" onClick={w3_close} className="w3-item w3-button">
                    About Us
                  </Link>
                </div>

                {sidebarOpen && (
                  <div
                    className="w3-overlay"
                    onClick={w3_close}
                    style={{ cursor: "pointer" }}
                  ></div>
                )}

                <div>
                  <button
                    className="wbtn text-3xl xs:text-3xl border py-1 pt-1 px-2 rounded-md pt-0 mt-0 text-gray-500 w3-white"
                    onClick={w3_open}
                  >
                    <div className="hamburger"> &#9776; </div>
                    <button className="allcrs text-xl flex align-middle gap-1">
                      <div className="font-semibold">All Courses</div>
                      <MdOutlineKeyboardArrowRight className="pt-1" size={"24px"} color="#31baa0" />
                    </button>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-4 d-flex justify-content-center py-2">
              <Link to="/">
                <img src={logo} className="h-14" alt=" " />
              </Link>
            </div>

            <div className="col-4 d-flex justify-content-end gap-2 align-items-center">
              <div className="text-gray-500"  onClick={openModal}
 aria-label="Search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-person hamburger"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
                <button className="allcrs text-xl border py-1 px-2 rounded-md flex  align-middle font-semibold"><div>Login</div><MdOutlineLogin className="pt-1" size={"26px"} color="#31baa0" /></button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black-400 bg-opacity-50 backdrop-blur-sm"
          onClick={w3_close}
        ></div>
      )}
            <LoginModel isOpen={isModalOpen} onClose={closeModal} />

    </div>
  );
};

export default Header;

import React from "react";
import "./Contact.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import Jello from "react-reveal/Jello";

const Contact = () => {
  const linkedinUrl = "https://www.linkedin.com/in/avijit-dam-a45814208/";
  const githubUrl = "https://github.com/Avijitdam98";
  const gmailUrl = "mailto:avijitdam003@gmail.com";
  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12 col-xl-6">
              <div className="card1">
                <div className="row border-line">
                  <Jello>
                    <img
                      src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                      alt="contact"
                      className="image"
                    />
                  </Jello>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="row">
                <div className="card2 d-flex card border-0 px-4 py-3">
                  <h6>
                    Contact With
                    <a href={linkedinUrl}>
                      <BsLinkedin color="blue" size={30} className="ms-2" />
                    </a>
                    <a href={githubUrl}>
                      <BsGithub color="black" size={30} className="ms-2" />
                    </a>
                    <a href={gmailUrl}>
                      <BiLogoGmail color="red" size={30} className="ms-2" />
                    </a>
                  </h6>
                </div>
                <div className="row px-3 mb-4">
                  <div className="line" />
                  <small className="or text-center">OR</small>
                  <div className="line" />
                </div>
                <div className="row px-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Write your Name"
                    className="mb-3"
                  />
                </div>

                <div className="row px-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email Adress"
                    className="mb-3"
                  />
                </div>

                <div className="row px-3">
                  <textarea
                    type="text"
                    name="msg"
                    placeholder="Write your Message"
                    className="mb-3"
                  />
                </div>

                <div className="row px-3">
                  <button className="button" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

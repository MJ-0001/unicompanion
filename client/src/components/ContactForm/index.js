import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <form className="contact-form">
      <div className="border form-inner">
        <div className="fluid-mb-3">
          <div id="emailHelp" className="form-text">
            <h1>Contact Us</h1>
          </div>

          <div id="emailHelp1" class="form-text">
            If you have any further questions please get in touch below!
          </div>

          <br></br>

          <div className="form-group">
            <label for="exampleFullName" className="form-label">
              Full Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleName"
              aria-describedby="fullName"
            />
          </div>
        </div>

        <div className="form-group mb-3">
          <label for="exampleEmail" className="form-label">
            Email Adresss:
          </label>
          <input type="text" className="form-control" id="exampleAddress" />
        </div>

        <div className="form-group mb-3">
          <label for="exampleQuestion" className="form-label">
            Question:
          </label>
          <input type="text" className="form-control" id="exampleQuestion" />
        </div>

        <button type="submit" className="btn btn-primary">
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default Contact;

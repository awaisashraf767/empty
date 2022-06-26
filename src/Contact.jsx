import React, { useState } from "react";

const Contact = () => {
  const [val, setval] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const inputEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setval((preValue) => {
      return { ...preValue, [name]: value };
    });
  };
  const submit = (event) => {
    event.preventDefault();
    alert(
      `Name : ${val.fullName} 
Phone Number : ${val.phoneNumber}
Email : ${val.email}
Message : ${val.message}`,
      setval({
        fullName: "",
        phoneNumber: "",
        email: "",
        message: "",
      })
    );
  };
  return (
    <React.Fragment>
      <section className="contact">
        <div className="container">
          <div className="row my-3">
            <h2 className="text-center">Contact us</h2>
          </div>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <form onSubmit={submit}>
                <div class="form-group my-3">
                  <label for="exampleFormControlInput1">Full Name</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    name="fullName"
                    value={val.fullName}
                    onChange={inputEvent}
                    id="exampleFormControlInput1"
                    placeholder="Enter your Full Name"
                  />
                </div>
                <div class="form-group my-3">
                  <label for="exampleFormControlInput2">Phone Number</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    name="phoneNumber"
                    value={val.phoneNumber}
                    onChange={inputEvent}
                    id="exampleFormControlInput2"
                    placeholder="Enter your Phone Number"
                  />
                </div>
                <div class="form-group my-3">
                  <label for="exampleFormControlInput3">Email address</label>
                  <input
                    required
                    type="email"
                    class="form-control"
                    name="email"
                    value={val.email}
                    onChange={inputEvent}
                    id="exampleFormControlInput3"
                    placeholder="name@example.com"
                  />
                </div>

                <div class="form-group my-3">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea
                    required
                    class="form-control"
                    placeholder="Enter any message"
                    name="message"
                    value={val.message}
                    onChange={inputEvent}
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-primary ">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;

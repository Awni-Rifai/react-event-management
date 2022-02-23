import React, { useState } from "react";
import axios from "axios";

function Guest() {
  const [email, setEmail] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [phone, setPhone] = useState("");
  const [data, setData] = useState({});
  const fNameHandle = (e) => {
    setEmail(e.target.value);
  };
  const lNameHandle = (e) => {
    setFName(e.target.value);
  };
  const emailHandle = (e) => {
    setLName(e.target.value);
  };
  const phoneHandle = (e) => {
    setPhone(e.target.value);
  };
  const formHandle = (e) => {
    e.preventDefault();
    // setData({
    //   fName: fName,
    //   lName: lName,
    //   phone: phone,
    //   email: email,
    //   event_id: localStorage.getItem("event_id"),
    // });
    let fd = new FormData();
    fd.append("fName", fName);
    fd.append("lName", lName);
    fd.append("email", email);
    fd.append("phone", phone);
    fd.append("event_id", localStorage.getItem("event_id"));
    

    axios.post("http://localhost/book.php", fd);
  };
  return (
    <div>
      {" "}
      {/* <!-- reg-info - start --> */}
      <div className="reg-info mb-50">
        {/* <!-- section-title - start --> */}
        <div className="section-title mb-30">
          <h2 className="big-title">
            {" "}
            Order as a <strong>guest</strong>
          </h2>
        </div>
        {/* <!-- section-title - end --> */}

        {/* <!-- row - start --> */}
        <div className="row">
          {/* <!-- ticket-buying-form - start --> */}
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="ticket-buying-form form-wrapper">
              <h3 className="form-title">ticket buyer</h3>

              <form action="#" onSubmit={formHandle}>
                <div className="form-item">
                  <input
                    type="text"
                    placeholder="First Name"
                    onChange={fNameHandle}
                    id="email"
                    name="email"
                  />
                </div>
                <div className="form-item">
                  <input
                    type="text"
                    placeholder="Last Name"
                    onChange={lNameHandle}
                  />
                </div>
                <div className="form-item">
                  <input
                    type="email"
                    placeholder="Email Address"
                    onChange={emailHandle}
                  />
                </div>
                <div className="form-item">
                  <input
                    type="text"
                    placeholder="0777777777"
                    onChange={phoneHandle}
                  />
                </div>
              </form>
            </div>
          </div>
          {/* <!-- ticket-buying-form - end --> */}

          {/* <!-- payment-form - start --> */}

          {/* <!-- payment-form - end --> */}
        </div>
        {/* <!-- row - end --> */}
      </div>
      {/* <!-- reg-info - end --> */}
    </div>
  );
}

export default Guest;

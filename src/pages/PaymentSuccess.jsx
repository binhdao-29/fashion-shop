import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { BsFillBagCheckFill } from "react-icons/bs";

import { runFireworks } from "../lib/utils";
import { AppContext } from "../context/AppProvider";
import Helmet from "../components/Helmet";

const PaymentSuccess = () => {
  const { setCart, setCategoryName } = useContext(AppContext);

  useEffect(() => {
    localStorage.clear();
    setCart([]);
    setCategoryName("");
    runFireworks();
    // eslint-disable-next-line
  }, []);

  return (
    <Helmet title="Payment Success">
      <div className="paymet-success">
        <div className="paymet-success__wrapper">
          <p className="icon">
            <BsFillBagCheckFill />
          </p>
          <h2>Thank you for your order!</h2>
          <p className="email-msg">Check your email inbox for the receipt.</p>
          <p className="description">
            If you have any questions, please email
            <a className="email" href="mailto:order@example.com">
              order@example.com
            </a>
          </p>
          <Link to="/fashion-shop">
            <button type="button" width="300px" className="btn-continue cb-btn">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </Helmet>
  );
};

export default PaymentSuccess;

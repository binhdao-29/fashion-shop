import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../context/AppProvider";
import Helmet from "../components/Helmet";

const PaymentCancel = () => {
  const { setCart, setCategoryName } = useContext(AppContext);

  useEffect(() => {
    localStorage.clear();
    setCart([]);
    setCategoryName("");
    // eslint-disable-next-line
  }, []);

  return (
    <Helmet title="Payment Success">
      <div className="paymet-success">
        <div className="paymet-success__wrapper">
          <h2>Checkout Failed! Please check again</h2>
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

export default PaymentCancel;

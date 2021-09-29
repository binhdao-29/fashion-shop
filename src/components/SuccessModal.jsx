import React from "react";
import PropTypes from "prop-types";

const SuccessModal = ({ title, isAddSuccess, toggleSuccessModal }) => {
  return (
    <div className={`modal-overlay ${isAddSuccess ? "active" : ""}`}>
      <div className="success-modal">
        <div className="modal__icon modal__icon--animate">
          <span className="modal-line modal-tip animate-success"></span>
          <span className="modal-line modal-long animate-success--long"></span>
          <div className="modal-placeholder"></div>
          <div className="modal-fix"></div>
        </div>

        <div className="product__title">{title}</div>
        <div className="modal__text">is added to cart !</div>
        <div className="modal__footer">
          <button
            onClick={() => toggleSuccessModal(!isAddSuccess)}
            className="modal-btn"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

SuccessModal.propTypes = {
  title: PropTypes.string.isRequired,
  toggleSuccessModal: PropTypes.func.isRequired,
  isAddSuccess: PropTypes.bool.isRequired,
};

export default SuccessModal;

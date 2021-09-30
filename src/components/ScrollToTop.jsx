import React, { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    document.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-top">
      {isVisible && (
        <div className="btn-back-to-top" onClick={scrollToTop}>
          <span className="symbol-btn">
            <i className="fas fa-chevron-up"></i>
          </span>
        </div>
      )}
    </div>
  );
}

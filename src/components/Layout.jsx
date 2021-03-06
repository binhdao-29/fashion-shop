import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Routes from "../routes/Routes";
import AppProvider from "../context/AppProvider";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <AppProvider>
          <Route
            render={(props) => (
              <div>
                <Header {...props} />

                <div>
                  <Routes />
                </div>

                {/* Scroll to top button */}
                <ScrollToTop />

                <Footer />
              </div>
            )}
          />
        </AppProvider>
      </BrowserRouter>
    </div>
  );
};

export default Layout;

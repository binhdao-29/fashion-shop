import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route } from "react-router-dom";
import alanBtn from "@alan-ai/alan-sdk-web";

import Header from "./Header";
import Footer from "./Footer";
import Routes from "../routes/Routes";
import AppProvider from "../context/AppProvider";
import ScrollToTop from "./ScrollToTop";

const alanKey =
  "8cf740108a42ab60c8296dbec4718bea2e956eca572e1d8b807a3e2338fdd0dc/stage";

const Layout = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === "go:back") {
          window.history.back();
        }
      },
    });
  }, []);

  return (
    <div>
      <BrowserRouter>
        <AppProvider>
          <Toaster />
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

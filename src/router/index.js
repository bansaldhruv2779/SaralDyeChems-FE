/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {ThemeProvider} from "@mui/material";
import Layout from "../components/Layout";
import ScrollToTop from "../components/ScrollToTop";
import routesData from "../constants/routesData";
import {NotFound, Maintenance} from "../pages";
import {theme} from "../theme";

function Router(props) {
  function PrivateRoute({children}) {
    return children;
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout maintenance={props.maintenance}>
          <ToastContainer
            autoClose={2000}
            position="bottom-center"
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="light"
          />
          <ScrollToTop>
            <Routes>
              {props.maintenance ? (
                <Route path="*" element={<Maintenance />} />
              ) : (
                <>
                  {routesData.map((route, index) => {
                    const {path, Component, exact, publicRoute} = route;
                    return (
                      <Route
                        key={index}
                        exact={exact}
                        path={path}
                        element={
                          publicRoute ? (
                            <Component />
                          ) : (
                            <PrivateRoute>
                              <Component />
                            </PrivateRoute>
                          )
                        }
                      />
                    );
                  })}
                  <Route path="/404" element={<NotFound />} />
                  <Route path="*" element={<Navigate to="/404" replace />} />
                </>
              )}
            </Routes>
          </ScrollToTop>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default Router;

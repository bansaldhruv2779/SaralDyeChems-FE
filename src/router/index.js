/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {ThemeProvider} from "@mui/material";
import Layout from "../components/Layout";
import routesData from "../constants/routesData";
import {NotFound} from "../pages";
import {theme} from "../theme";

function Router() {
  function PrivateRoute({children}) {
    return children;
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
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
          <Routes>
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
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default Router;

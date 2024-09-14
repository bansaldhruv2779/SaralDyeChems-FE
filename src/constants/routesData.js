import {Home, ContactUs, Products, AboutUs, Maintenance} from "../pages";

const routesData = [
  {
    path: "/",
    Component: Maintenance,
    publicRoute: true,
    exact: true,
  },
  {
    path: "/about-us",
    Component: AboutUs,
    publicRoute: true,
    exact: true,
  },
  {
    path: "/contact-us",
    Component: ContactUs,
    publicRoute: true,
    exact: true,
  },
  {
    path: "/products/:categoryId",
    Component: Products,
    publicRoute: true,
    exact: true,
  },
];

export default routesData;

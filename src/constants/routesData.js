import {Login, Home, ContactUs, Products, AboutUs} from "../pages";

const routesData = [
  {
    path: "/",
    Component: Home,
    publicRoute: true,
    exact: true,
  },
  {
    path: "/login",
    Component: Login,
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
    path: "/products",
    Component: Products,
    publicRoute: true,
    exact: true,
  },
  // {
  //   path: "/orders",
  //   Component: AllOrders,
  //   publicRoute: false,
  //   exact: false,
  // },
];

export default routesData;

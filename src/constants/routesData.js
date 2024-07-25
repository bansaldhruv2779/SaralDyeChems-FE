import {
  Login,
  Home,
  ContactUs,
  Products,
  AboutUs,
  Coverage,
  Partners,
  Testimonials,
} from "../pages";

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
    path: "/About-us",
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
  {
    path: "/Coverage",
    Component: Coverage,
    publicRoute: true,
    exact: true,
  },
  {
    path: "/Partners",
    Component: Partners,
    publicRoute: true,
    exact: true,
  },
  {
    path: "/Testimonials",
    Component: Testimonials,
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

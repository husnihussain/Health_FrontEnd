/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: "/dashboard", // the url
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Home", // name that appear in Sidebar
  },
  {
    path: "/forms",
    icon: "FormsIcon",
    name: "Hospitals & Doctors Near You",
  },
  {
    path: "/cards",
    icon: "CardsIcon",
    name: "Testings",
  },
  {
    path: "/charts",
    icon: "ChartsIcon",
    name: "Consaltations",
  },
  {
    path: "/buttons",
    icon: "ButtonsIcon",
    name: "My Appoinments",
  },
  {
    path: "/modals",
    icon: "ModalsIcon",
    name: "Stack Questions and Answers & News",
  },

  {
    path: "/tables",
    icon: "TablesIcon",
    name: "Order Medicine",
  },
  {
    icon: "PagesIcon",
    name: "Pages",
    routes: [
      // submenu
      {
        path: "/login",
        name: "Login",
      },
      {
        path: "/create-account",
        name: "Create account",
      },
      {
        path: "/forgot-password",
        name: "Forgot password",
      },
      {
        path: "/404",
        name: "404",
      },
      {
        path: "/blank",
        name: "Blank",
      },
    ],
  },
];

export default routes;

/*!

=========================================================
* Now UI Dashboard React - v1.5.1
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/


// import Icons from "views/Icons.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import UserPage from "views/UserPage.js";
import MapsNav from "views/MapsNav.js"

const dashRoutes = [

  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "design_image",
  //   component: Icons,
  //   layout: "/admin"
  // },
  {
    path: "/maps/:name",
    name: "Map1",
    icon: "location_map-big",
    component: Maps,
    layout: "/admin",
    invisible: true
  },

  {
    path: "/nav/:start/:end",
    name: "NavSearch",
    icon: "location_map-big",
    component: MapsNav,
    layout: "/admin",
    invisible: true
  },

  {
    path: "/maps",
    name: "Maps",
    icon: "location_map-big",
    component: Maps,
    layout: "/admin"
  },

  {
    path: "/checkin",
    name: "Patient Check In",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin"
  },
  {
    path: "/extended-tables",
    name: "Locations",
    icon: "files_paper",
    component: TableList,
    layout: "/admin"
  },



  
];
export default dashRoutes;

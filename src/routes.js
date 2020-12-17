
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

import LocationOn from "@material-ui/icons/LocationOn";
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";

import Location from "views/Location/Location"
import Assigntask from "views/Assigntask/Assigntask"




const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Employee Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Employee Data",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  
  {
      path: "/location",
      name: "Loocation",
      icon: LocationOn,
      component: Location,
      layout: "/admin"
    },
    {
      path: "/Assigntask",
      name: "Task Assign",
      icon: AssignmentTurnedInIcon,
      component: Assigntask,
      layout: "/admin"
    },
];

export default dashboardRoutes;

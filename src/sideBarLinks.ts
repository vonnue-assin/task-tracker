import taskImage from "./assets/images/icons8-talk-about-tasks-50.png";
import dashboardImage from "./assets/images/icons8-dashboard-48.png";
import notificationImage from "./assets/images/icons8-alert-50.png";

export const sidebarLinks = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: dashboardImage,
    alt: "Dashboard",
  },
  {
    name: "My Tasks",
    path: "/my-tasks",
    icon: taskImage,
    alt: "My Tasks",
  },
  {
    name: "Notifications",
    path: "/notifications",
    icon: notificationImage,
    alt: "Notifications",
  },
];

import { Component, OnInit } from "@angular/core";

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "nc-bank", class: "" },
  {
    path: "/table",
    title: "Forum",
    icon: "nc-tile-56",
    class: "",
  },
  {
    path: "/icons",
    title: "Traning and Drills ",
    icon: "nc-diamond",
    class: "",
  },
  { path: "/maps", title: "Police Locations", icon: "nc-pin-3", class: "" },
  {
    path: "/notifications",
    title: "Emergency Contacts",
    icon: "nc-bell-55",
    class: "",
  },

  { path: "/user", title: "Incident Report", icon: "nc-single-02", class: "" },

  {
    path: "/typography",
    title: "Convicts",
    icon: "nc-caps-small",
    class: "",
  },
  {
    path: "/surviellance",
    title: "Surviellance Viewing",
    icon: "nc-pin-3",
    class: "",
  },
  {
    path: "/upgrade",
    title: "Logout",
    icon: "nc-single-02",
    class: "active-pro",
  },
];

@Component({
  moduleId: module.id,
  selector: "sidebar-cmp",
  templateUrl: "sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
}

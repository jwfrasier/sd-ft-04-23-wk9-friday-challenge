import dashboard from "./icons8-performance-macbook-50 (1).png";
import customers from "./icons8-customers-50.png";
import help from "./icons8-help-50.png";
import password from "./icons8-password-50.png";
import signout from "./icons8-sign-out-50.png";
import messages from "./icons8-messages-50.png";
import settings from "./icons8-settings-50.png";

export type NavbarLinkName = {
  name: string;
  icon?: string;
};

export const navbarLinkNames: NavbarLinkName[] = [
  { name: "Dashboard", icon: dashboard },
  { name: "Customers", icon: customers },
  { name: "Messages", icon: messages },
  { name: "Help", icon: help },
  { name: "Settings", icon: settings },
  { name: "Password", icon: password },
  { name: "Sign Out", icon: signout },
];

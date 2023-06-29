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
interface User {
  id: number;
  name: string;
  title: string;
  imageSrc?: string;
  rounded?: boolean;
  smallerText?: string;
  largeText?: string;
  width?: string;
}

export const navbarLinkNames: NavbarLinkName[] = [
  { name: "Dashboard", icon: dashboard },
  { name: "Customers", icon: customers },
  { name: "Messages", icon: messages },
  { name: "Help", icon: help },
  { name: "Settings", icon: settings },
  { name: "Password", icon: password },
  { name: "Sign Out", icon: signout },
];

export const userData: User[] = [
  {
    id: 1,
    name: "John Doe",
    title: "Software Engineer",
    rounded: true,
    imageSrc:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "UX Designer",
    rounded: true,
    imageSrc:
      "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: 3,
    name: "Michael Johnson",
    title: "Quality Assurance Analyst",
    rounded: true,
    imageSrc:
      "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: 4,
    name: "Sarah Williams",
    title: "Technical Writer",
    rounded: true,
    imageSrc:
      "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
  },
];

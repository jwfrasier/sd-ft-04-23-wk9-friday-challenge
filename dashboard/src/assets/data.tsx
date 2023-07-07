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

export interface Task {
  id: number;
  title: string;
  state: string;
  description: string;
  assignee: number;
}

export const task: any = [
  {
    id: 1,
    title: "Code review for new feature",
    state: "In Progress",
    description:
      "Perform a comprehensive code review for a new feature implementation in the Google application.",
    assignee: 1,
  },
  {
    id: 2,
    title: "Bug triaging",
    state: "Pending",
    description:
      "Review and prioritize reported bugs in the Google search engine for further investigation and resolution.",
    assignee: 3,
  },
  {
    id: 3,
    title: "Documentation update",
    state: "Completed",
    description:
      "Update the developer documentation for Google Cloud Platform's new API functionalities and provide accurate information for developers.",
    assignee: 4,
  },
  {
    id: 4,
    title: "UI design review",
    state: "In Progress",
    description:
      "Collaborate with the design team to review and provide feedback on the user interface design of an upcoming Google product.",
    assignee: 2,
  },
  {
    id: 5,
    title: "Data analysis for ad campaign",
    state: "Pending",
    description:
      "Analyze user engagement data and metrics to measure the effectiveness of a Google Ads campaign and make data-driven recommendations for optimization.",
    assignee: 1,
  },
  {
    id: 6,
    title: "Security audit",
    state: "Completed",
    description:
      "Conduct a comprehensive security audit of Google's internal systems to identify vulnerabilities and propose necessary security measures.",
    assignee: 3,
  },
  {
    id: 7,
    title: "Performance optimization",
    state: "In Progress",
    description:
      "Identify and optimize performance bottlenecks in the Google Chrome browser to improve overall speed and user experience.",
    assignee: 1,
  },
  {
    id: 8,
    title: "Feature brainstorming session",
    state: "Scheduled",
    description:
      "Participate in a brainstorming session to generate innovative ideas for new features and enhancements in Google Workspace applications.",
    assignee: 2,
  },
  {
    id: 9,
    title: "Customer support escalation",
    state: "In Progress",
    description:
      "Investigate and resolve escalated customer support issues related to Google Cloud Platform services, ensuring customer satisfaction.",
    assignee: 4,
  },
  {
    id: 10,
    title: "API integration testing",
    state: "Pending",
    description:
      "Perform integration testing for a newly developed API to ensure seamless integration with external systems and platforms.",
    assignee: 1,
  },
  {
    id: 11,
    title: "Training session preparation",
    state: "In Progress",
    description:
      "Prepare training materials and presentations for an upcoming internal training session on Google Ads best practices.",
    assignee: 4,
  },
  {
    id: 12,
    title: "Competitive analysis",
    state: "Completed",
    description:
      "Conduct a competitive analysis of rival products and services in the market, gathering insights for Google's strategic planning and product differentiation.",
    assignee: 3,
  },
];

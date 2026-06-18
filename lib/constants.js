export const PLATFORM_URL = "https://code4community.net";

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const heroPhrases = [
  "help your organization",
  "scale with your mission",
  "save you time",
  "connect your teams",
  "turn data into impact",
  "power your programs",
  "grow your impact",
  "serve your community",
];

export const buildItems = [
  { label: "Web apps", icon: "globe" },
  { label: "Websites for organizations", icon: "building" },
  { label: "Volunteer management tools", icon: "users" },
  { label: "Event scheduling systems", icon: "calendar" },
  { label: "Donation tracking dashboards", icon: "chart" },
  { label: "Custom software", icon: "code" },
];

export const partners = [
  { name: "S2Alliance", logo: "/s2alliance_inc_logo.jpeg", alt: "S2Alliance" },
  { name: "LCPS", logo: "/lcps.png", alt: "Loudoun County Public Schools" },
  { name: "Beaverbots", logo: "/beaverbots.png", alt: "Beaverbots Team Robots" },
];

export const services = [
  {
    title: "Custom Websites",
    description:
      "Clean, professional websites for nonprofits and small businesses that need an online presence without agency prices.",
    icon: "globe",
  },
  {
    title: "Productivity Tools",
    description:
      "Internal tools to manage events, volunteers, programs, and day-to-day operations.",
    icon: "tool",
  },
  {
    title: "Data Dashboards",
    description:
      "Track donations, participation, and organization metrics in one place.",
    icon: "chart",
  },
  {
    title: "Custom Solutions",
    description:
      "Have a unique problem? We work with you to design and build a solution that fits.",
    icon: "spark",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Tell us your idea",
    description:
      "Share what you need — a rough sketch, a spreadsheet, or just a problem you want solved.",
  },
  {
    step: "02",
    title: "We scope & design",
    description:
      "Our student team maps out the solution, timeline, and what success looks like for you.",
  },
  {
    step: "03",
    title: "Build & launch",
    description:
      "We develop, test, and ship your tool — then stand behind it so you can focus on your mission.",
  },
];

export const workProjects = [
  {
    title: "Donor & CRM Systems",
    description: "Track donors, campaigns, and relationships in one dashboard.",
    image: "/donor-dashboard.png",
    tag: "Delivered",
  },
  {
    title: "Volunteer Portals",
    description: "Sign up, schedule, and manage volunteers across programs.",
    image: "/volunteer-portal.png",
    tag: "Delivered",
  },
  {
    title: "Program Reporting",
    description: "Real-time dashboards for program outcomes and participation.",
    image: "/program-reporting.png",
    tag: "Delivered",
  },
  {
    title: "Math Lab Scheduler",
    description: "Tutoring requests, sessions, and history for Broad Run High School.",
    tag: "Live",
    external: `${PLATFORM_URL}/mathlab`,
  },
  {
    title: "Writing Center",
    description: "Request writing help, track sessions, and manage tutor assignments.",
    tag: "Live",
    external: `${PLATFORM_URL}/writing-center`,
  },
  {
    title: "Club Hub",
    description: "Club directory, engagement rankings, and shared calendar.",
    tag: "Live",
    external: `${PLATFORM_URL}/club-hub`,
  },
];

export const stats = [
  { value: "100+", label: "Tools built" },
  { value: "Low cost", label: "Student-led pricing" },
  { value: "2023", label: "Founded at Broad Run HS" },
  { value: "Free", label: "For qualifying orgs" },
];

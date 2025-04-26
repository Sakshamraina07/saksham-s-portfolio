import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Saksham Raina",
  initials: "SR",
  url: "https://sakshamraina.com",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Software Developer with experience in web development. Passionate about building innovative solutions and learning new technologies.",
  summary:
    "I'm a Computer Science undergrad at SPPU Pune, passionate about Data Analysis and building impactful tech solutions. Originally from a Kashmiri Pandit family in Jammu & Kashmir, moving to Pune has shaped my resilience and broadened my outlook.\n\nBeyond tech, I'm an avid chess player—sharpening strategy and problem-solving both on the board and in code. Always eager to learn, collaborate, and grow. Let's connect if you're into tech, innovation, or a good game of chess!",
  avatarUrl: "/me.png",
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Python",
    "Java",
    "SQL",
    "Git",
    "REST APIs",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sakshamraina@example.com",
    tel: "+91XXXXXXXXXX",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sakshamraina",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/sakshamraina",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/sakshamraina",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:sakshamraina@example.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Rezuwizard",
      href: "https://rezuwizard.com",
      badges: [],
      location: "Remote",
      title: "Market Research Analyst",
      logoUrl: "/rezuwizard.png",
      start: "April 2025",
      end: "June 2025",
      description:
        "Worked as a market research analyst, analyzing market trends and providing insights for strategic decision-making.",
    },
    {
      company: "Infosys",
      href: "https://infosys.com",
      badges: [],
      location: "India",
      title: "Software Development Intern",
      logoUrl: "/infosys.png",
      start: "May 2023",
      end: "July 2023",
      description:
        "Completed a 2-month internship at Infosys, working on software development projects and learning industry best practices.",
    },
  ],
  education: [
    {
      school: "Marathwada Mitramandal's Institute of Technology",
      href: "https://www.mmit.edu.in/",
      degree: "Bachelor of Engineering in Computer Engineering",
      logoUrl: "/university.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Portfolio Website",
      href: "https://sakshamraina.com",
      dates: "2024",
      active: true,
      description:
        "A personal portfolio website built with Next.js and TailwindCSS to showcase my work and experience.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://sakshamraina.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;

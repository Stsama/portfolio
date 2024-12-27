import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

import Hirrd from "@/public/Portfolio_Images/Hirrd.png";
import Yoom from "@/public/Portfolio_Images/Yoom.png";
import Summarizer from "@/public/Portfolio_Images/Summarizer.png";
import NoteApp from "@/public/Portfolio_Images/note_app.png";
import ReactSecure from "@/public/Portfolio_Images/react_secure_app.png";
import FeedMe from "@/public/Portfolio_Images/FeedMe.png";






export const links = [
  {
    name: "Navbar.home",
    hash: "#home",
  },
  {
    name: "Navbar.about",
    hash: "#about",
  },
  {
    name: "Navbar.projects",
    hash: "#projects",
  },
  {
    name: "Navbar.skills",
    hash: "#skills",
  },
  {
    name: "Navbar.experience",
    hash: "#experience",
  },
  {
    name: "Navbar.contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Experience.exp1.title",
    location: "Experience.exp1.location",
    description: "Experience.exp1.description",
    icon: React.createElement(LuGraduationCap),
    date: "Experience.exp1.date",
  },
  {
    title: "Experience.exp2.title",
    location: "Experience.exp2.location",
    description: "Experience.exp2.description",
    icon: React.createElement(LuGraduationCap),
    // icon: React.createElement(CgWorkAlt),
    date: "Experience.exp2.date",
  },
  {
    title: "Experience.exp3.title",
    location: "Experience.exp3.location",
    description: "Experience.exp3.description",
    icon: React.createElement(FaReact),
    date: "Experience.exp3.date",
  },
] as const;

export const projectsData = [
  {
    title: "project1.title",
    description: "project1.description",
    tags: ["React", "TypeScript", "Supabase", "Clerk", "Tailwind", "Shadcn UI"],
    imageUrl: Hirrd,
    link: "https://hirrd-dusky.vercel.app",
  },
  {
    title: "project2.title",
    description: "project2.description",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Clerk", "Stream"],
    imageUrl: Yoom,
    link: "https://yoom-fe4o2vf5k-stsamas-projects.vercel.app",
  },
  {
    title: "project3.title",
    description: "project3.description",
    tags: ["Vanilla.js", "RapidAPI", "Tailwind", "Zustand"],
    imageUrl: Summarizer,
    link: "https://ezoulsonsummarizer.netlify.app",
  },
  {
    title: "project4.title",
    description: "project4.description",
    tags: ["Flask", "Jinja", "SQL", "Css", "Html"],
    imageUrl: FeedMe,
    link: "https://stsama.pythonanywhere.com",
  },
  {
    title: "project5.title",
    description: "project5.description",
    tags: ["Node.js", "Express", "MongoDB", "Tailwind", "EJS"],
    imageUrl: NoteApp,
    link: "https://note-app-v1.onrender.com",
  },
  {
    title: "project6.title",
    description: "project6.description",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Framer", "Express"],
    imageUrl: ReactSecure,
    link: "https://react-secure-auth.onrender.com",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

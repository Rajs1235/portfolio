import {
  backend,
  creator,
  mobile,
  web,
  github,
  css,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  project2,
  project3,
} from '../assets';

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Full-Stack Developer", icon: web },
  { title: "Frontend Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "UI/UX Designer", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Material UI", icon: mui },
  { name: "Node JS", icon: nodejs },
  { name: "Express Js", icon: express },
  { name: "MongoDB", icon: mongodb },
  { name: "MySql", icon: mysql },
  { name: "AWS", icon: aws },
  { name: "gsap", icon: gsap },
  { name: "framer", icon: framer },
  { name: "Three JS", icon: threejs },
  { name: "figma", icon: figma },
  { name: "git", icon: git },
];

const experiences = [
  {
    title: "Volunteer - Arima Foundation",
    company_name: "ARIMA Foundation",
    icon: github,
    iconBg: "#E6DEDD",
    date: "Dec 2023",
    points: [
      "Participated as a volunteer in education drives organized by ARIMA Foundation.",
      "Helped in providing educational and healthcare benefits to students in rural areas of U.P.",
    ],
  },
];

const projects = [
  {
    name: "Digitization of MANIT Campus",
    description:
      "Developed a full-stack map website using Vite, React, Node.js, MongoDB, and Google Earth Pro with ArcGIS. Built features like map layer creation and campus data visualization.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "ArcGIS", color: "orange-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/Rajs1236/manit-digitization",
  },
  {
    name: "ByteJournal",
    description:
      "Built a blog submission platform using React Hook Form, Appwrite, and TinyMCE for content creation, authentication, file storage, and media-rich editing.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Appwrite", color: "pink-text-gradient" },
      { name: "TinyMCE", color: "purple-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/Rajs1236/bytejournal",
  },
  {
    name: "SkillShare-style Platform",
    description:
      "Designed and built a SkillShare-style full-stack platform with user authentication, course enrollment, learning paths, progress tracking, badges, and real-time chat using MERN stack and Socket.IO.",
    tags: [
      { name: "MERN", color: "green-text-gradient" },
      { name: "Socket.IO", color: "blue-text-gradient" },
      { name: "TailwindCSS", color: "pink-text-gradient" },
      { name: "Framer Motion", color: "orange-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/Rajs1236/skillswap",
  },
];

const testimonials = [
  {
    testimonial: "This platform helped me improve my skills and meet great mentors!",
    name: "Amit Verma",
    designation: "Frontend Developer",
    company: "Google",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial: "Thanks to SkillSwap, I landed my first freelance gig!",
    name: "Priya Sharma",
    designation: "UI Designer",
    company: "Fiverr",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial: "The real-time chat and skill matching are super useful!",
    name: "Ravi Singh",
    designation: "Backend Developer",
    company: "Amazon",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

export { services, technologies, experiences, projects, testimonials };


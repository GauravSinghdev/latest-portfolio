// @/lib/projectsNskills.ts

export interface Project {
  title: string;
  description: string;
  stack: string[];
  githubLink: string;
  live: string;
  image: string;
}

export interface Skill {
  path: string;
  name: string;
}

export const ProjectObj: Project[] = [
  {
    title: "Forge UI",
    description:
      "It contains some prebuild components and you can use the code in your projects. Just copy paste.",
    stack: ["React", "Next.js", "Tailwind CSS"],
    githubLink: "https://github.com/GauravSinghdev/forgeUI",
    live: "https://ui.forge.codewithkara.com/",
    image: "/forge.jpg",
  },
  {
    title: "ChitChatly",
    description: "Chatting app where you can see who's online",
    stack: ["JavaScript", "HTML", "CSS", "WebSocket"],
    githubLink: "https://github.com/GauravSinghdev/chitchatly",
    live: "https://chitchatly.codewithkara.com/",
    image: "/chitchatly.jpg",
  },
  {
    title: "Rabbitype",
    description:
      "Practice and improve your typing skills to achieve a good rank.",
    stack: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/GauravSinghdev/rabbitype",
    live: "https://rabbitype.codewithkara.com/",
    image: "/rabbitype.jpg",
  },
  {
    title: "JustLinks",
    description:
      "Create your account and can save your important links and use them whenever in need.",
    stack: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/GauravSinghdev/JustLinks",
    live: "https://justlinks.codewithkara.com/",
    image: "/justlinks.jpg",
  },
  {
    title: "MediClone",
    description: "Its a clone of medium app",
    stack: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/GauravSinghdev/Medium-Clone",
    live: "https://mediclone.codewithkara.com/",
    image: "/mediclone.jpg",
  },
  {
    title: "Tawanjo",
    description: "It was a demo for my freelance project for CA/CS service",
    stack: ["JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/GauravSinghdev/tawanjo",
    live: "https://tawanjo.vercel.app/",
    image: "/tawanjo.jpg",
  },
];

export const front: Skill[] = [
  { path: "/assets/front/html.png", name: "HTML5" },
  { path: "/assets/front/css.png", name: "CSS3" },
  { path: "/assets/front/javascript.png", name: "JavaScript" },
  { path: "/assets/front/react.png", name: "React" },
  { path: "/assets/front/tailwindcss.png", name: "Tailwind CSS" },
  { path: "/assets/front/nextjs.png", name: "Next.js" },
  { path: "/assets/front/nodejs.png", name: "Node.js" },
];

export const back: Skill[] = [
  { path: "/assets/back/express.png", name: "Express" },
  { path: "/assets/back/mongodb.png", name: "MongoDB" },
  { path: "/assets/back/mysql.png", name: "MySQL" },
  { path: "/assets/back/postgresql.png", name: "PostgreSQL" },
  { path: "/assets/back/redis.png", name: "Redis" },
  { path: "/assets/back/websocket.png", name: "WebSocket" },
];

export const devops: Skill[] = [
  { path: "/assets/devops/aws.png", name: "AWS" },
  { path: "/assets/devops/cloudflare.png", name: "Cloudflare" },
  { path: "/assets/devops/docker.png", name: "Docker" },
  { path: "/assets/devops/github.png", name: "GitHub" },
  { path: "/assets/devops/java.png", name: "Java" },
  { path: "/assets/devops/python.png", name: "Python" },
];

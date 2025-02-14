import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube, FaDiscord, FaReddit, FaStackOverflow, FaMedium, FaDev, FaTelegram, FaTwitch, FaDribbble, FaBehance, FaPinterest, FaSnapchat, FaTiktok, FaGlobe } from "react-icons/fa";

// Customize the Social Links
export const personalInfo = {
  name: "Srisailam Kakurala",
  role: "Full Stack Developer",
  bio: "Founder/CTO @ e-Go Bus | Owner of BatTemplates",
  email: "contact@example.com",
  socialLinks: [
    { name: "GitHub", url: "https://github.com/SrisailamKakurala", icon: FaGithub },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/SrisailamKakurala/", icon: FaLinkedin },
    { name: "Twitter", url: "https://twitter.com/yourhandle", icon: FaTwitter },
    { name: "Instagram", url: "https://instagram.com/yourhandle", icon: FaInstagram },
    { name: "Facebook", url: "https://facebook.com/yourhandle", icon: FaFacebook },
    { name: "YouTube", url: "https://youtube.com/yourchannel", icon: FaYoutube },
    { name: "Discord", url: "https://discord.com/invite/yourserver", icon: FaDiscord },
    { name: "Reddit", url: "https://reddit.com/u/yourhandle", icon: FaReddit },
    { name: "Stack Overflow", url: "https://stackoverflow.com/users/yourid", icon: FaStackOverflow },
    { name: "Medium", url: "https://medium.com/@yourhandle", icon: FaMedium },
    { name: "Dev.to", url: "https://dev.to/yourhandle", icon: FaDev },
    { name: "Telegram", url: "https://t.me/yourhandle", icon: FaTelegram },
    { name: "Twitch", url: "https://twitch.tv/yourhandle", icon: FaTwitch },
    { name: "Dribbble", url: "https://dribbble.com/yourhandle", icon: FaDribbble },
    { name: "Behance", url: "https://www.behance.net/yourhandle", icon: FaBehance },
    { name: "Pinterest", url: "https://www.pinterest.com/yourhandle/", icon: FaPinterest },
    { name: "Snapchat", url: "https://www.snapchat.com/add/yourhandle", icon: FaSnapchat },
    { name: "TikTok", url: "https://www.tiktok.com/@yourhandle", icon: FaTiktok },
    { name: "Website", url: "https://yourwebsite.com", icon: FaGlobe }
  ],
  about: "I'm a passionate full-stack developer with expertise in building modern web applications. I specialize in React, Node.js, and cloud technologies, focusing on creating efficient and scalable solutions."
};


export const experiences = [
  {
    title: "Senior Developer",
    company: "Tech Corp",
    period: "2020 - Present",
    description: "Led development of multiple full-stack applications."
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions",
    period: "2018 - 2020",
    description: "Developed and maintained web applications."
  },
  {
    title: "Junior Developer",
    company: "StartUp Inc",
    period: "2016 - 2018",
    description: "Frontend development and UI/UX design."
  },
  // other experiences
];


// You can use local images insstead of URL's if you want
export const skills = {
  languages: [
    { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
  ],
  frameworks: [
    { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }
  ],
  tools: [
    { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "VS Code", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
  ],
  devops: [
    { name: "AWS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Jenkins", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    { name: "Kubernetes", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" }
  ],
  // other skills
};


// Replace the Project images with it's Logos
export const projects = [
  {
    title: "Project One",
    description: "A modern web application with real-time features",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tags: ["React", "Node.js", "MongoDB"],
    links: {
      github: "#",
      youtube: "#",
      live: "#"
    }
  },
  {
    title: "Project Two",
    description: "Full-stack e-commerce platform with payment integration",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    links: {
      github: "#",
      youtube: "#",
      live: "#"
    }
  },
  {
    title: "Project Three",
    description: "Mobile-first social media dashboard",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    tags: ["React Native", "Firebase"],
    links: {
      github: "#",
      youtube: "#",
      live: "#"
    }
  },
  // More projects
];

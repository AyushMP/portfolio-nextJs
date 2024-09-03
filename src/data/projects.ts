import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
 {
    id: "drowsy-driver-detection",
    title: "Drowsy Driver Detection System",
    description:
      "A real-time alert system for detecting driver drowsiness using computer vision techniques and machine learning algorithms.",
    icon: "/skills/opencv-svgrepo-com.svg", // Replace with an appropriate icon if available
    repoType: RepoType.Public, // Change to RepoType.Public if it's a public repository
    projectType: ProjectType.Academic, // Change to ProjectType.Personal if it’s a personal project
    githubUrl: "https://github.com/AyushMP/Driver-Drowsiness-Detection-master", // Add your GitHub URL here if available
    url: "", // Add the live project URL here if available
    tags: ["Computer Vision", "Machine Learning", "Real-Time", "Python"],
    screenshots: ["/screenshots/drowsy-driver.png"], // Replace with the actual screenshot path
},

{
  id: "license-plate-recognition-system",
  title: "License Plate Recognition System",
  description:
    "An automated system for recognizing and processing vehicle license plates using computer vision and OCR techniques.",
  icon: "/skills/ocr.png", // Replace with an appropriate icon if available
  repoType: RepoType.Public, // Change to RepoType.Public if it's a public repository
  projectType: ProjectType.Academic, // Change to ProjectType.Personal if it’s a personal project
  githubUrl: "https://github.com/AyushMP/Licence_Plate_Recognition", // Add your GitHub URL here if available
  url: "", // Add the live project URL here if available
  tags: ["Computer Vision", "OCR", "Python", "Automation"],
  screenshots: ["/screenshots/license-plate-recognition.png"], // Replace with the actual screenshot path
},

{
  id: "online-ticket-booking-system",
  title: "Online Ticket Booking System",
  description:
    "A web-based application for booking tickets online, built using Django, providing a seamless and secure user experience.",
  icon: "/skills/django-svgrepo-com.svg", // Replace with an appropriate icon if available
  repoType: RepoType.Public, // Change to RepoType.Public if it's a public repository
  projectType: ProjectType.Academic, // Change to ProjectType.Personal if it’s a personal project
  githubUrl: "https://github.com/AyushMP/Online-Ticket-Booking", // Add your GitHub URL here if available
  url: "", // Add the live project URL here if available
  tags: ["Django", "Python", "Web Development", "Bootstrap"],
  screenshots: ["/screenshots/ticket-booking.png"], // Replace with the actual screenshot path
},

{
  id: "rasa-chatbot",
  title: "Rasa Chatbot",
  description:
    "A conversational AI chatbot built using Rasa, capable of answering questions related to AIML and providing user support.",
  icon: "/skills/Rasa.png", // Replace with an appropriate icon if available
  repoType: RepoType.Public, // Change to RepoType.Public if it's a public repository
  projectType: ProjectType.Personal, // Change to ProjectType.Academic if it’s an academic project
  githubUrl: "https://github.com/AyushMP/Rasa-ChatBot", // Add your GitHub URL here if available
  url: "", // Add the live project URL here if available
  tags: ["Rasa", "NLP", "Chatbot", "Python", "Machine Learning"],
  screenshots: ["/screenshots/rasa-chatbot.png"], // Replace with the actual screenshot path
},

{
  id: "solana-nft-marketplace",
  title: "Solana NFT Marketplace",
  description:
    "A decentralized NFT marketplace built on the Solana blockchain, allowing users to mint, buy, sell, and trade NFTs. Developed using Next.js, TypeScript, and Tailwind CSS.",
  icon: "/skills/Solana.png", // Replace with an appropriate icon if available
  repoType: RepoType.Private, // Change to RepoType.Private if it's a private repository
  projectType: ProjectType.Personal, // Adjust to ProjectType.Academic if it’s an academic project
  githubUrl: "", // Add your GitHub URL here if available
  url: "", // Add the live project URL here if available
  tags: ["Solana", "NFT", "Blockchain", "Next.js", "TypeScript", "Tailwind CSS"],
  screenshots: ["/screenshots/solana-nft-marketplace.png"], // Replace with the actual screenshot path
},
];

export default projects;

export function getProjectName(id: string) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item.title;
}

export function getProjectDetails(id: string): IProjectItem | null {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item;
}

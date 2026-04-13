export type Project = {
  id: string;
  name: string;
  tags: string[];
  description: string;
  githubLink: string;
  websiteLink?: string;
  image: string;
};

export const projects: Project[] = [
  {
    id: "ClipLink",
    name: "ClipLink - URL Shortener",
    tags: [
      "Java",
      "Spring Boot",
      "React",
      "Analytics",
      "PostgreSQL",
      "URL Shortener",
    ],
    description:
      "ClipLink is a URL shortening service built with Java Spring Boot for the backend and React for the frontend. It provides features like link shortening, analytics, and user management. The application uses PostgreSQL for data persistence.",
    githubLink: "https://github.com/Sujeeth-Varma/url-shortner",
    websiteLink: "https://cliplink.sujeeth.in/",
    image: "/projects/cliplink.png",
  },
  {
    id: "realtime-chat-app",
    name: "Realtime Chat App",
    tags: [
      "Java",
      "Spring Boot",
      "Next.js",
      "WebSocket",
      "MongoDB",
      "Chat-App",
    ],
    description:
      "A real-time chat application built using Java Spring Boot for the backend and Next.js for the frontend. Supports WebSocket-based messaging with MongoDB for data persistence.",
    githubLink: "https://github.com/Sujeeth-Varma/realtime-chat-app",
    image: "/projects/chat.png",
  },
  {
    id: "movie-ticket-booking-app",
    name: "Movie Ticket Booking App",
    tags: ["Spring Boot", "PostgreSQL", "Next.js", "DB Transactions", "JWT"],
    description:
      "A fullstack movie ticket booking application with a Java Spring Boot backend and a Next.js frontend. It uses PostgreSQL for data persistence. The app supports movie listings, showtimes, seat selection, and ticket booking with JWT-based authentication.",
    githubLink: "https://github.com/Sujeeth-Varma/movie-ticket-booking-app",
    image: "/projects/movieapp.png",
  },
];

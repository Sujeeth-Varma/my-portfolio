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

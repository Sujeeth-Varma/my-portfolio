export const profile = {
  name: "Sujeeth Varma",
  role: "Software engineer",
  email: "sujeethvarma27@gmail.com",
  summary:
    "I build backend systems and spend a lot of time thinking about how data moves, where responsibilities belong, and what could fail.",
  availability: "Working on backend systems and learning as I build.",
  links: {
    github: "https://github.com/Sujeeth-Varma/",
    linkedin: "https://www.linkedin.com/in/sujeeth-varma/",
    x: "https://x.com/sujeethtwt",
  },
} as const;

export const capabilities = [
  {
    name: "Languages",
    description: "Python, Java, Go, JavaScript",
  },
  {
    name: "AI / Backend",
    description:
      "LangChain, LangGraph, RAG, Spring Boot, FastAPI, Node.js, Express.js, REST APIs, Microservices",
  },
  {
    name: "Databases / DevOps",
    description:
      "PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch, Docker, Kubernetes, Linux, AWS",
  },
] as const;

export const timeline = [
  {
    type: "Experience",
    title: "Software Engineer",
    organization: "Sasken",
    period: "October 2026 — Present",
    detail: "Working as a Software Engineer.",
  },
] as const;

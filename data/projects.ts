export type EngineeringDecision = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  role: string;
  systemFocus: string;
  stack: string[];
  capabilities: string[];
  problem: string;
  solution: string;
  architecture: string[];
  decisions: EngineeringDecision[];
  challenges: string[];
  githubLink: string;
  websiteLink?: string;
  image: {
    src: string;
    alt: string;
  };
};

export const projects: Project[] = [
  {
    slug: "multi-source-web-research-agent",
    name: "Multi-Source Web Research Agent",
    summary:
      "A research pipeline that searches multiple providers, verifies claims, and produces citation-backed answers.",
    description:
      "A FastAPI orchestration pipeline and React dashboard coordinate concurrent search, source processing, Gemini verification, and observable answer synthesis.",
    role: "Backend and AI systems",
    systemFocus: "Grounded research orchestration",
    stack: ["Python", "FastAPI", "React", "TypeScript", "Gemini", "Langfuse"],
    capabilities: [
      "Multi-source retrieval",
      "Claim verification",
      "Citation-backed synthesis",
    ],
    problem:
      "Web research spans providers with overlapping URLs, inconsistent content quality, and claims that may agree or conflict. Producing a useful answer requires more than search results: sources must be normalized, fetched safely, ranked, verified, and connected to the final response.",
    solution:
      "A FastAPI orchestrator queries Serper, Wikipedia, and DuckDuckGo concurrently, canonicalizes URLs, fetches and parses pages asynchronously, and ranks relevant sources. Gemini then verifies claims and produces a grounded report with source-level citations, while Langfuse records pipeline behavior and failures.",
    architecture: [
      "React client",
      "FastAPI orchestrator",
      "Search providers",
      "Async fetch and ranking",
      "Gemini verification",
      "Citation-backed synthesis",
      "Langfuse tracing",
    ],
    decisions: [
      {
        title: "Search providers concurrently",
        description:
          "Serper, Wikipedia, and DuckDuckGo are queried in parallel to broaden coverage without turning each provider into a sequential delay.",
      },
      {
        title: "Normalize evidence before synthesis",
        description:
          "Canonical URL deduplication, bounded page fetching, and relevance ranking reduce repeated or low-value material before it reaches the language model.",
      },
      {
        title: "Separate verification from answer generation",
        description:
          "Claims receive verified, contradicted, or uncertain states before synthesis so the final report can preserve conflicts and source provenance.",
      },
    ],
    challenges: [
      "Handling provider failures and partial results without discarding the entire research response.",
      "Preserving citation provenance while deduplicating, ranking, verifying, and synthesizing evidence.",
    ],
    githubLink:
      "https://github.com/Sujeeth-Varma/Multi-Source-Web-Research-Agent",
    image: {
      src: "/projects/research-agent-system.png",
      alt: "Multiple web sources flowing through filtering and verification into a grounded research report",
    },
  },
  {
    slug: "cliplink",
    name: "ClipLink",
    summary:
      "A URL-shortening service with authenticated link management and redirect analytics.",
    description:
      "ClipLink combines a Spring Boot API, a React client, and PostgreSQL to create, manage, and observe shortened links.",
    role: "Full-stack development",
    systemFocus: "Redirects and analytics",
    stack: ["Java", "Spring Boot", "React", "PostgreSQL"],
    capabilities: ["URL shortening", "Analytics", "User management"],
    problem:
      "Long URLs are difficult to share and offer little visibility into how often a link is used. The system needed one place to create short links, manage them, and inspect redirect activity.",
    solution:
      "A Spring Boot service owns link creation, redirect resolution, analytics, and user management. The React interface exposes those capabilities while PostgreSQL persists link and account data.",
    architecture: ["React client", "Spring Boot API", "PostgreSQL"],
    decisions: [
      {
        title: "Keep redirect logic in the API",
        description:
          "Link resolution and analytics remain behind one backend boundary so redirect behavior is consistent across clients.",
      },
      {
        title: "Use relational persistence",
        description:
          "PostgreSQL provides a clear model for users, managed links, and their associated activity.",
      },
      {
        title: "Separate management from redirection",
        description:
          "The management interface can evolve without coupling its UI behavior to the public redirect path.",
      },
    ],
    challenges: [
      "Keeping the public redirect path focused while still recording useful activity.",
      "Presenting analytics without making link creation and management feel heavy.",
    ],
    githubLink: "https://github.com/Sujeeth-Varma/url-shortner",
    websiteLink: "https://cliplink.sujeeth.in/",
    image: {
      src: "/projects/cliplink.png",
      alt: "ClipLink link-management interface",
    },
  },
  {
    slug: "realtime-chat-app",
    name: "Realtime Chat App",
    summary:
      "A persistent messaging application built around WebSocket communication.",
    description:
      "A Next.js client communicates with a Spring Boot backend over WebSockets, with MongoDB used for message persistence.",
    role: "Full-stack development",
    systemFocus: "Realtime messaging",
    stack: ["Java", "Spring Boot", "Next.js", "WebSocket", "MongoDB"],
    capabilities: ["Realtime delivery", "Persistent messages", "Web client"],
    problem:
      "A chat interface needs messages to arrive without repeated polling while keeping conversation history available between sessions.",
    solution:
      "The application uses a persistent WebSocket connection for live communication, a Spring Boot service for message handling, and MongoDB for stored conversation data.",
    architecture: [
      "Next.js client",
      "WebSocket connection",
      "Spring Boot service",
      "MongoDB",
    ],
    decisions: [
      {
        title: "Use WebSockets for the active session",
        description:
          "A persistent connection supports bidirectional message delivery without a client polling loop.",
      },
      {
        title: "Persist conversation data separately",
        description:
          "MongoDB keeps message history available independently of the lifetime of a WebSocket connection.",
      },
      {
        title: "Keep transport concerns in the backend",
        description:
          "The client renders conversations while the Spring Boot service manages connection and message behavior.",
      },
    ],
    challenges: [
      "Coordinating connection state with the messages shown in the interface.",
      "Keeping transient delivery behavior separate from persisted conversation history.",
    ],
    githubLink: "https://github.com/Sujeeth-Varma/realtime-chat-app",
    image: {
      src: "/projects/chat.png",
      alt: "Realtime chat conversation interface",
    },
  },
  {
    slug: "movie-ticket-booking-app",
    name: "Movie Ticket Booking App",
    summary:
      "A transactional booking flow for listings, showtimes, seats, and authenticated users.",
    description:
      "A Next.js frontend and Spring Boot backend coordinate movie discovery and seat booking, with JWT authentication and PostgreSQL transactions.",
    role: "Full-stack development",
    systemFocus: "Transactional booking",
    stack: ["Spring Boot", "PostgreSQL", "Next.js", "JWT"],
    capabilities: ["Seat selection", "Bookings", "Authentication"],
    problem:
      "A ticket-booking system must connect movie discovery, showtime selection, authentication, and seat reservation without leaving booking data in a partial state.",
    solution:
      "The Next.js client drives the booking flow while Spring Boot owns authentication and booking rules. PostgreSQL transactions protect multi-step persistence during ticket creation.",
    architecture: [
      "Next.js client",
      "JWT authentication",
      "Spring Boot API",
      "PostgreSQL",
    ],
    decisions: [
      {
        title: "Protect booking writes with transactions",
        description:
          "The database transaction boundary keeps related booking changes together instead of committing a partial reservation.",
      },
      {
        title: "Use token-based authentication",
        description:
          "JWT authentication gives the frontend a defined way to access protected booking operations.",
      },
      {
        title: "Keep booking rules on the server",
        description:
          "Seat and ticket operations are enforced by the Spring Boot API rather than relying on client state.",
      },
    ],
    challenges: [
      "Coordinating seat selection with the final booking write.",
      "Keeping the multi-step flow understandable while preserving server authority.",
    ],
    githubLink:
      "https://github.com/Sujeeth-Varma/movie-ticket-booking-app",
    image: {
      src: "/projects/movieapp.png",
      alt: "Movie ticket booking interface",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

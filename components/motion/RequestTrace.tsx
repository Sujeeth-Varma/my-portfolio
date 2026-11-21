"use client";

import * as m from "motion/react-m";

const trace = ["client", "api", "service", "database"] as const;

export default function RequestTrace() {
  return (
    <div
      className="request-trace"
      role="img"
      aria-label="Request flow: client to API to service to database"
    >
      {trace.map((node, index) => (
        <span className="trace-step" key={node}>
          <m.span
            aria-hidden="true"
            initial={{ opacity: 0.28 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.16 + index * 0.15, duration: 0.24 }}
          >
            [{node === "database" ? `(${node})` : node}]
          </m.span>
          {index < trace.length - 1 ? (
            <m.span
              className="trace-arrow"
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.27 + index * 0.15, duration: 0.2 }}
            >
              {" -> "}
            </m.span>
          ) : null}
        </span>
      ))}
    </div>
  );
}

import { timeline } from "@/data/profile";

export default function Timeline() {
  return (
    <ol className="timeline">
      {timeline.map((item) => (
        <li className="timeline-item" key={`${item.type}-${item.title}`}>
          <div className="timeline-period">{item.period}</div>
          <div className="timeline-content">
            <p className="timeline-type">{item.type}</p>
            <h3>{item.title}</h3>
            <p className="timeline-organization">{item.organization}</p>
            <p>{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

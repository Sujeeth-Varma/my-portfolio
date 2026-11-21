import { capabilities } from "@/data/profile";

export default function CapabilityList() {
  return (
    <dl className="capability-list">
      {capabilities.map((capability) => (
        <div className="capability-item" key={capability.name}>
          <dt>{capability.name}</dt>
          <dd>{capability.description}</dd>
        </div>
      ))}
    </dl>
  );
}

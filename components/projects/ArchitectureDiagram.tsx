export default function ArchitectureDiagram({ nodes }: { nodes: string[] }) {
  const diagram = nodes.map((node) => `[${node}]`).join(" -> ");

  return (
    <div className="architecture-diagram">
      <pre aria-hidden="true">{diagram}</pre>
      <p className="sr-only">System flow: {nodes.join(" to ")}.</p>
    </div>
  );
}

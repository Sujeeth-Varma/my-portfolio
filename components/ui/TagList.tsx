export default function TagList({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="tag-list" aria-label="Technologies">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

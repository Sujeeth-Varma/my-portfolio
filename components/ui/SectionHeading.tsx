type SectionHeadingProps = {
  title: string;
  description?: string;
  id?: string;
};

export default function SectionHeading({
  title,
  description,
  id,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2 id={id}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

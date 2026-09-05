export function PageHeading({
  tag,
  title,
  intro,
}: {
  tag: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="max-w-3xl">
      <p className="eyebrow">{tag}</p>
      <h1 className="mt-3 page-title text-3xl text-ink sm:text-4xl">{title}</h1>
      {intro && <p className="mt-4 text-lg text-muted-foreground">{intro}</p>}
    </header>
  );
}

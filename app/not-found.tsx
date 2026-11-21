import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <p className="not-found-code" aria-hidden="true">
        [request] -&gt; [404]
      </p>
      <h1>This route does not resolve.</h1>
      <p>The page may have moved, or the address may be incomplete.</p>
      <Link className="primary-link" href="/">
        Return home
      </Link>
    </section>
  );
}

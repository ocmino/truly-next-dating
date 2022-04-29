import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="page hello">
      <div>
        <p>Välkommen till truly</p>
        <p>
          <Link href="/loginpage">
            <a>Logga in</a>
          </Link>
        </p>
      </div>
    </div>
  );
}

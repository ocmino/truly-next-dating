import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="page about">
      <h1>truly</h1>
      <div>
        <p><input placeholder="E-post"></input></p>
        <p><input placeholder="Lösenord"></input></p>
        <p><button>Logga in</button></p>
        <p>
          <Link href="/contactform">
            <a>Problem att logga in?</a>
          </Link>
        </p>
      </div>
    </div>
  );
}

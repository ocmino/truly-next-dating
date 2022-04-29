import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="page about">
      <h1>truly</h1>
      <div>
        <p><input type="email" class="input-email" placeholder="E-post"></input></p>
        <p><input type="password" class="input-password" placeholder="Lösenord"></input></p>
        <p><button><p>
          <Link href="/welcome">
            <a>Logga in</a>
          </Link>
        </p></button></p>
        
        <p>
          <Link href="/contactform">
            <a className="problemlogin">Problem att logga in?</a>
          </Link>
        </p>
      </div>
    </div>
  );
}

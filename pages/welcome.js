import Link from "next/link";

export default function Welcome() {
  return (
    <div className="page about">
      <div className="welcomepage">
        <h1>Välkomment till truly</h1>
        <br></br>
        <p>För att interagera med våra användare behöver du först lära dig mer om dig själv genom att göra ett test.
            Testet är baserat på forskning om anknytningsteori och mäter den ambivalenta samt undvikande dimensionen. Läs mer här.
            Testet tar ca 5 min att göra.
        </p>
        <p><button><p>
          <Link href="/test">
            <a>Gör testet</a>
          </Link>
        </p></button></p>
      </div>
      <p>
          <Link href="/loginpage">
            <a className="backToFirstPage">Gå tillbaka</a>
          </Link>
        </p>
    </div>
  );
}

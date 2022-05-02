import Link from "next/link";
import Image from 'next/image'
import logo from '../public/static/logo.png'

export default function Welcome() {
  return (
    <div >
      <div className="welcomepage">
        <div className="textCenter">
        <Image src={logo} alt="Picture of the author" width={50} height={50}/>
        </div>
        <h1 className="textCenter">Välkomment till truly</h1>
        <br></br>
        <p>För att interagera med våra användare behöver du först lära dig mer om dig själv genom att göra ett test.
            <br></br><br></br>
            Testet är baserat på forskning om anknytningsteori och mäter den ambivalenta samt undvikande dimensionen. Läs mer här.
            <br></br><br></br>
            Testet tar ca 5 min att göra.
        </p>
        <p><button><p>
          <Link href="/test">
            <a>Gör testet</a>
          </Link>
        </p></button></p>
      </div>
      <p>
          <Link href="/public/static/logo.png">
            <a className="backToFirstPage">←</a>
          </Link>
        </p>
    </div>
  );
}

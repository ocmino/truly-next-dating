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
        <h1 className="textCenter">Välkommen till truly</h1>
        <br></br>
        <p>För att interagera med våra användare behöver du först lära dig mer om dig själv genom att göra ett test.
            <br></br><br></br>
            Testet är baserat på forskning om anknytningsteori och mäter den ambivalenta samt undvikande dimensionen. <Link href="https://en.wikipedia.org/wiki/Attachment_theory">
            <a className="readMoreLink">Läs mer här.</a>
          </Link>
            <br></br><br></br>
            Testet tar ca 5 min att göra.
        </p>
        <p><button><p>
          <Link href="/questions">
            <a>Gör testet</a>
          </Link>
        </p></button></p>
      </div>
      
      <p>
          <Link href="/loginpage">
            <a className="backToFirstPage">←</a>
          </Link>
        </p>
        
    </div>
  );
}

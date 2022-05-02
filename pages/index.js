import Link from "next/link";
import Image from 'next/image'
import logo from '../public/static/truly-logo.png'

export default function AboutPage() {
  return (
    <div className="page about">
      <div>
      {/* logo */}
      <h1 className="trulyLogin"><Image src={logo} width={50} height={50}/> truly</h1>
      </div>
      
      <div>
      <button className="indexButtonLogin"><p>
          <Link href="/loginpage">
            <a className="">Logga in</a>
          </Link>
        </p></button>

        <button className="indexButtonCreateAccount">
          <Link href="/createAccount">
            <p>Skapa konto</p>
          </Link>
        </button>

      

 
      </div>
      
    </div>
  );
}

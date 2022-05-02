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
        <p><input type="email" class="input-email" placeholder="E-post"></input></p>
        <p><input type="password" class="input-password" placeholder="Lösenord"></input></p>
        <p><button className="loginButton"><p>
          <Link href="/welcome">
            <a className="">Logga in</a>
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

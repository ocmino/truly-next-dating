import Link from "next/link";
import Image from 'next/image'
import logo from '../public/static/truly-logo.png'
import React, { useState } from "react";

export default function AboutPage() {


const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleLogin = (e: any) => {
    e.preventDefault()
    console.log(data)
  }
}

  return (
    <div className="page about">
      <div>
      {/* logo */}
      <h1 className="trulyLogin"><Image src={logo} width={50} height={50}/> truly</h1>
      </div>
      
      <div>
        <p><input type="email" className="input-email" placeholder="E-post"></input></p>
        <p><input type="password" className="input-password" placeholder="Lösenord"></input></p>
        <p><button className="loginButton"><p>
          <Link href="/welcome">
            <a className="indexButtonLoginColor">Logga in</a>
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

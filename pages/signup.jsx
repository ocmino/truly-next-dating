import Link from "next/link";
import Image from 'next/image'
import logo from '../public/static/truly-logo.png'
import React, { useState } from "react";
import { firestore } from "../utils/firebase";
import axios from "axios";

export default function SignUp({ users }) {


const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  })

}



const handleSubmit = (event) => {
event.preventDefault()

const formData = new FormData (event.target)
const body = Object.fromEntries(formData.entries())
console.log(body)



axios.post('/api/users', body).then((res) => {
  console.log(res)
})


}


  return (




    <div className="page about">
      <div>
      {/* logo */}
    {  <h1 className="trulyLogin"><Image src={logo} width={50} height={50}/> truly</h1>}
      </div>
      
      <form onSubmit={handleSubmit}>
        <div>
          <p><input type="email" name="email" id="email" className="input-email" placeholder="E-post"></input></p>
          <p><input type="password" name="password" id="password" className="input-password" placeholder="Lösenord"></input></p>
          <p><button type="submit" className="loginButton">Skapa konto</button></p>
          
          <p>
            <Link href="/contactform">
              <a className="problemlogin">Problem att logga in?</a>
            </Link>
          </p> 
        </div>
      </form>   

      {/* <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>
              <a>{user.email}</a>
              </Link>
            </li>
          )
        })}
      </ul> */}

      
    </div>
    
    
  );

  
}



// serverside code
export async function getServerSideProps(){

const snapshots = await firestore.collection('users').get()
const users = snapshots.docs.map(doc => {
  return  {
    id: doc.id,
    ...doc.data()
  }
})

  return {
    props: {
      users : users
    }
  }


}

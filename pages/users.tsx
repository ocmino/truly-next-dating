import Link from "next/link";
import Image from 'next/image'
import logo from '../public/static/truly-logo.png'
import React, { useState } from "react";
import { firestore } from "../utils/firebase";

export default function Users({ users }) {
console.log(users)

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
  

      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>
              <a>{user.email}</a>
              </Link>
            </li>
          )
        })}
      </ul>

      
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

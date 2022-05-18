import Link from "next/link";
import Image from 'next/image'
import logo from '../public/static/truly-logo.png'
import { firestore } from "../utils/firebase";

export default function AboutPage({ users }) {
  /* console.log(users) */
  
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
// serverside code
export async function getServerSideProps(){

const snapshots = await firestore.collection('users').get()
const users = snapshots.docs.map(doc => {
  return  {
    id: doc.id,
    ...doc.data()
  }
})

console.log(users)
  return {
    props: {
      users : users
    }
  }


}

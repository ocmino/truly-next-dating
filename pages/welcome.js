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
        <h1 className="welcomeheader">Välkommen till truly</h1>
        
        <p>Innan du börjar interagera med våra användare behöver du genomföra ett anknytningstest för att lära dig mer om din anknytning och hur det påverkar dina beteenden, tankar och känslor.
            <br></br><br></br>
            Testet är baserat på forskning om anknytningsteori. 
            <br></br><br></br>
            
        </p>
        <div className="trulylist">
          <p><b>Truly</b> hjälper dig att:</p>
            <ul>
              <li>Förstå dina mönster och bli tryggare i ditt dejtande</li>
              
              <li>Få kunskap om hur anknytning påverkar ditt dejtingliv</li>
              
              <li>Få tillgång till verktyg som hjälper dig att känna dig trygg i din anknytning</li>
            </ul>
        </div>
      <br></br>
        <p>Testet tar ca <b>5 min</b> att göra.</p>
        
        <p><button className="startTestButton"><p>
          <Link href="/questions">
            <a className="indexButtonLoginColor">Gör testet</a>
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

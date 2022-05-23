
import questions from "../questions.json";

import { useState } from "react";
import Link from "next/link";





export default function RelationalType() {

    const [score] = useState(0);
   
    return (
        <div className="relationaltypePage"> 
            <div className="relationalText">
                <h1 className="relationalfirstText">Din anknytning är</h1>
               <div> <h1 className="undvikande">UNDVIKANDE</h1></div>
        



            </div>  
            <div className="scoreReveal">
                <p>Ditt värde ( 4.2 av {questions.length})</p>
            </div>
            <div className="informationText">   
                <p>Ett värde över 3,11 resulterar i en undvikande anknytning. Ett högre värde kan tyda på en otryggare anknytning</p>
            </div>
            <div className="descriptiveText">
                <ul>
                   <li>Mer tankestyrd än känslostyrd.</li>
                    <li>Ofta social & utåtriktad.</li>
                    <li> Upplevs som trygg & självständig.</li>
                    <li>Känns svårt att tala om känslor.</li>
                   <li> Hittar snabbt ”brister” hos sin partner.</li>
                </ul>   
            </div>

            <p><button className="startTestButton"><p>
          <Link href="readmoredropdown">
            <a className="indexButtonLoginColor">Fortsätt</a>
          </Link>
        </p></button></p>
        </div>
    )
}
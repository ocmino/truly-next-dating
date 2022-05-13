
import questions from "../questions.json";
import Questionaire from "./questions";
import { useState } from "react";
import Link from "next/link";




export default function RelationalType() {

    const [score] = useState(0);
   
    return (
        <div className="relationaltypePage"> 
            <div className="relationalText">
                <h1 className="relationalfirstText">Din relationstyp är</h1>
               <div> <h1 className="undvikande">UNDVIKANDE</h1></div>



            </div>  
            <div className="scoreReveal">
                <p>Ditt värde ( {score} av {questions.length})</p>
            </div>
            <div className="informationText">   
                <p>Ett värde över 3,11 resulterar i en undvikande anknytning. Ett högre värde kan tyda på en otryggare anknytning</p>
            </div>
            <div className="descriptiveText">
                <p> 
                Mer tankestyrd än känslostyrd.
                Ofta social & utåtriktad.
                Upplevs som trygg & självständig.
                Känns svårt att tala om känslor.
                Hittar snabbt ”brister” hos sin partner.

                </p>
            </div>

            <p><button><p>
          <Link href="">
            <a>Fortsätt</a>
          </Link>
        </p></button></p>
        </div>
    )
}
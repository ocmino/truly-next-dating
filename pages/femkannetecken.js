import Link from "next/link"
export default function Femkannetecken(){

    return(

       
        <div className="Infopages">
            <div className="headline">
                <Link href="/readmoredropdown"><a className="backArrow">←</a></Link>
                <h2>Fem kännetecken</h2>
            </div>
            <div className="fivesignscontent">

                <p> Mer tankestyrd än känslostyrd. </p>
                <p> Ofta social och utåtriktad. </p>
                <p> Upplevs som trygg & självständig. </p>
                <p> Känns svårt att tala om känslor. </p> 
                <p> Hittar snabbt &ldquo;brister&rdquo; hos sin partner. </p>
                
            </div>
        </div>
    )
}
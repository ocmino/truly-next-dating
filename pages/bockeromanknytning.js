import Link from "next/link"

export default function Bockeromanknytning(){
    return(
        <div className="Infopages">

            <div className="headline">
                <Link href="/readmoredropdown"><a className="backArrow">←</a></Link>
                <h2>Böcker om anknytning</h2>
            </div>
            <div className="content">
                <p><b>Tryggare i kärlek </b>- Handbok för dig med otrygg-ambivalent anknytning - En enkel och lättläst bok med många konkreta övningar och tips. Skriven speciellt för dig som har en otrygg-ambivalent anknytning.</p>
                <p><b>Attached </b>- Den väldigt populära engelska boken om anknytning - En bok som ger dig tydliga strategier för att hantera din anknytning.</p>
                <p><b>Hemligheten </b>- Från ögonkast till varaktig relation - Kanske den mest kända av alla svenska böcker som behandlar anknytningsteori och troligen den som fått många att få upp ögonen för detta ämne. Väldigt lättläst.</p>
                <p><b>Lust & olust </b>- Om sex, närhet och anknytning - Bok som b la beskriver hur anknytning och sex hänger ihop. Innehåller praktiska övningar med målet att öka den sexuella självkännedomen och självkänslan.</p>
                <p><b>Insecure in Love </b>- Boken riktar sig speciellt till dig med otrygg-ambivalent anknytning.</p>
            </div>
            </div>    
    )
}
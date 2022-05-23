import Link from "next/link"

export default function Barndomenspaverkan(){
    return(
        <div className="Infopages">

            <div className="headline">
                <Link href="/readmoredropdown"><a className="backArrow">←</a></Link>
                <h2>Barndomens påverkan</h2>
            </div>
            <div className="childhoodcontent">
                <p>Barn med otrygg-undvikande anknytning förväntar sig att bli avvisade och bortstötta när de behöver hjälp. Därför lär de sig tidigt att inte söka närhet och stöd, utan att klara sig själva. De tänker sig fram till svar snarare än känner efter. 
                <br></br>
                Som vuxna är de ofta omtyckta och fungerar bra i mer ytliga relationer. I nära relationer håller de distans – de kan vara svåra att komma inpå livet, och drar sig ofta undan när de upplever krav på närhet.</p>
            </div>

        </div>
    )
}
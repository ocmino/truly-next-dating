import Link from "next/link"

export default function Andraanknytning(){
    return(
        <div className="Infopages">
            <div className="headline">
                <Link href="/readmoredropdown"><a className="backArrow">←</a></Link>
                <h2>Ändra anknytning?</h2>
            </div>
        </div>
    )
}
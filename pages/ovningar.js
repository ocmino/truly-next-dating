import Link from "next/link"

export default function Ovningar(){
    return(
        <div className="Infopages">

            <div className="headline">
                <Link href="/readmoredropdown"><a className="backArrow">←</a></Link>
                <h2>Övningar som utmanar</h2>
            </div>
            <div className="content">
                <p>■ Den lilla och den stora människan</p>
                <p>■ Tvärtom-metoden</p>
            </div>
        </div>
    )
}
import Link from "next/link"

export default function Andraanknytning(){
    return(
        <div className="Infopages">
            <div className="headline">
                <Link href="/readmoredropdown"><a className="backArrow">←</a></Link>
                <h2>Ändra anknytning?</h2>
            </div>
            <div className="content">
                <br></br>
                <p> <b>Kan man ändra sin anknytning?</b></p>
                <p>Det korta svaret är &ldquo;Ja&rdquo;!</p>
                <p>Du kan på många sätt påverka din anknytning även som vuxen. De finns personer som helt och hållet ändrar anknytningstyp under livet (t.ex. från undvikande till trygg). Många andra har kvar samma anknytning men lär sig att förstå och hantera den. På så sätt kan de lättare bygga upp och behålla harmoniska kärleksrelationer.</p>
                <br></br>
                <p>Ca 30% ändrar sin anknytningstyp som vuxna</p>
                <br></br>
                <p><b>Faktorer som kan få den med trygg anknytning till att bli otrygg</b></p>
                <p>Otrygga vänner</p>
                <p>En elak partner</p>
                <p>Ett hjärtskärande uppbrott</p>
                <p>Traumatisk livshändelse av något slag</p>
                <br></br>
                <p><b>Faktorer som kan få den med otrygg anknytning till att bli trygg</b></p>
                <p>Lojala vänner</p>
                <p>Hälsosamma och trygga kärleksrelationer</p>
                <p>Att ha en trygg partner</p>
                <p>Förbättrad relation med sina föräldrar</p>
            </div>
        </div>
    )
}
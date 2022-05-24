import Link from "next/link"

export default function Triggadanknytning(){
    return(
        <div className="Infopages">

            <div className="headline">
                <Link href="/readmoredropdown"><a className="backArrow">←</a></Link>
                <h2>När triggas anknytning?</h2>
            </div>
            <div className="triggerconectcontent">
                <p><b>När triggas anknytningen?</b></p>
                <p>1. När du är ensam eller med vänner påverkas din anknytning troligen inte speciellt mycket. 
                    <br></br>
                    2. När du börjar dejta eller är nyfiken är den inte heller speciellt aktiverad. 
                    <br></br>
                    3. Däremot sen, när regelbundna dejter och förälskelse inställer sig så aktiveras den - det är då du har som mest att förlora - hotbilden är som tydligast!
                    <br></br> 
                    4. Om du klarat dig igenom förälskelsefasen och gått över till en mer stabil relation - grattis! Nu kan du i större lugn bearbeta din relationstyp.</p>
            </div>
            </div>    
    )
}
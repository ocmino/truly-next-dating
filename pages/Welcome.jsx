import Link from "next/link"

export default function Welcome() {
    return (
        <div>
            <p>
            För att interagera med våra användare behöver du först lära dig mer om dig själv genom att göra ett test. 

Testet är baserat på forskning om anknytningsteori och mäter den ambivalenta samt undvikande dimensionen. Läs mer här.

Testet tar ca 5 min att göra.
            </p>
            <Link href="/Questionaire">
    <a>Gör testet</a>
  </Link>
        </div>
    )
}
import Link from "next/link";


export default function Layout({children}) {
    return (
        <div>

<Link href="/" passHref>
    <a>Välommen till Truly</a>
  </Link>{' /'}{' '}

  <Link href="/LoginPage" passHref>
    <a>Logga in</a>
  </Link>{' /'}{' '}


  <Link href="/Questionaire">
    <a>Test</a>
  </Link>


        {children}
        </div>
    )
}
import Link from 'next/link'

export default function Login() {
    return (
    <div>
        <h1>Email</h1>
        <h1>Lösenord</h1>
        <Link href="/Welcome">
    <a>Logga in</a>
  </Link>
    </div>
    
    )
    
}
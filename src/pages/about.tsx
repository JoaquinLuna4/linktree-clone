import "../../styles/globals.css"
import Link from "next/link"

export default function About() {

  return (
    <main className="container_info">
    
      <h1 className="center">Usuarios</h1>
      <Link href="https://twitter.com/" legacyBehavior>
  <a target="_blank" rel="noopener noreferrer" className='link-item'>
    tuiter
  </a>
</Link>
<Link href="https://facebook.com" target="_blank"> Facebook </Link>
    </main>

  )
}

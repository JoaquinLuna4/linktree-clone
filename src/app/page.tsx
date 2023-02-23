import { get } from "https"
import Link  from "next/link";
import api from "../api"

export default async function Home() {
  // const users = await api.user.list()
   const links = await api.links.fetch()

  return (
    // <main>
    //   <h1>Joaquito</h1>
    //   <ul>
    //   {users.map((user)=>(
    //     <li key={user.url}>
    //     <Link href={`/${user.slug}`}> {user.slug}</Link>
    //   </li >
    //   ))}
    // </ul>
    // </main>

<main>
      <h1>Joaquito</h1>
      <ul>
      {links.map((link)=>(
        <li key={link.url}>
        <a href={link.url}>{link.label}</a>
      </li >
      ))}
    </ul>
    </main>

  )
}

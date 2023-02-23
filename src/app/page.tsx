import { get } from "https"
import Link  from "next/link";
import api from "../api"

export default async function Home() {
   const users = await api.user.list()
  return (
    <main>
      <h1>Joaquito</h1>
      <ul>
      {users.map((user)=>(
        <li key={user.url}>
        <Link href={`${user.slug}`}>{user.slug}</Link>
      </li >
      ))}
    </ul>
    </main>

  )
}

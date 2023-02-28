import "../../styles/globals.css"

import Link  from "next/link";
import api from "../api"
export default async function Home() {
   const users = await api.user.list()
   
  return (
    <main className="container_info">
      <ul className="card_user">
        <h1 className="center">Usuarios</h1>
        {users.map((user)=>(
        <li key={user.url} className="card_link">
        <Link href={`${user.slug}`} className="center" >{user.slug}</Link>
        </li >
        ))}
      </ul>
    </main>

  )
}

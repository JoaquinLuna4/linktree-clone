import { get } from "https"
import api from "../api"

export default async function Home() {
  const links = await api.links.fetch()
  console.log(links);
  return (
    <main>
      <h1>Joaquito</h1>
      <ul>
      {links.map((link)=>(
        <li key={link.URL}>
        <a href={link.URL}>{link.LABEL}</a>
      </li >
      ))}
    </ul>
    </main>
  )
}

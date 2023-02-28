import api from "@/api"
import "../../../styles/globals.css"
import Link from "next/link"
import { notFound } from "next/navigation"
type Props = {
    params : {
        slug : string,      
    }
}
export default async function Slug({params: {slug}} : Props ) {

 //Traemos los user de la lista del sheet   
 const users = await api.user.list()  
 //De los usuarios que tenemos buscamos el que tiene el mismo slug que me estoy trayendo de la url /slug
 const user = users.find((user)=>user.slug === slug)
 //Si no tengo user devuelvo el 404
 if(!user){
    return notFound()
 }
//Tomo como parametro la url del user que tenga 
const links = await api.links.fetch(user.url)

const name = await user.slug
console.log(links)

  return (
<div className="container_info">

      <ul className="card_user ">
        <h1 className="center">{name}</h1>
        {links.map((link)=>(
          <li key={link.url} className="card_link">
            <Link href={link.url} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
              {link.label}
              </a>
            </Link>
          </li >
        ))}
      </ul>
</div >
  )
}
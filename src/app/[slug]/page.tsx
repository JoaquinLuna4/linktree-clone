import api from "@/api"
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
 
 //Si no tengo user devuelvo un 404
 if(!user){
    return notFound()
 }

//Toma como parametro la url del user que tenga 

 const links = await api.links.fetch(user.url)

  return (
<main>
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
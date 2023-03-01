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
const urlImage = "https://pbs.twimg.com/profile_images/1630889864559206401/zHnSfqL7_400x400.jpg"
const name = await user.slug


const filter =  (Object.values(links[0])).splice(2, 1).toString();
console.log(filter);

// console.log(filter, "fiflterers");

  return (
<div className="container_info">

      <ul className="card_user ">
        <img className="profile_img center" src={filter} alt="imagen" />
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
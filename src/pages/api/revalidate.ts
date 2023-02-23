import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(_req:NextApiRequest, res:NextApiResponse, ) {
    // Revalida nuestro '/' path
    await res.revalidate('/')
    // Devolvuelve un json que contenga revalidated:true
    return res.json({revalidated:true})

    
}
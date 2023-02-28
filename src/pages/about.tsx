// app/page.tsx
import { Link } from '@chakra-ui/next-js'
import { Button, ButtonGroup } from '@chakra-ui/react'
import api from "../api"

export default async function Page() {
   const users = await api.user.list()

  return (
    <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }}>
        
        
     
      About
    </Link>
  )
}
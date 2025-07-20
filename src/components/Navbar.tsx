
import Link from "next/link"
import { SignOutButton,useUser,useClerk,UserButton } from "@clerk/nextjs"

export const Navbar = ( )=>{


    return (
      <nav className="border-b h-[8vh] flex items-center">
         <div className="container flex items-center justify-between">
           <Link href={'/'}> <h1 className="font-bold text-2xl">Logo</h1></Link>
         </div>

         <div className="flex items-center gap-x-5">
        <Link href={'/sign-in'}>
        <button className="bg-gray-200 rounded text-black p-2">SignIn</button>
        </Link> 
        <Link href={'/sign-up'}>
        <button className="bg-gray-200 rounded text-black p-2">SignUp</button>
        </Link>

         </div>
      </nav>  
    );
}

export default  Navbar
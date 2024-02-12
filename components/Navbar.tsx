'use client';

import Link from "next/link"
import Image from "next/image"
import '../constants/index'
import { NAV_LINKS } from "@/constants"
import Button from "./Button"
import { useState } from "react"
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">

      <Link href='/'>
        <Image src= "/hilink-logo.svg" alt="logo" width={74} height={29}/>
        </Link>

        <ul className={`md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 gap-12 md:pl-0 pl-9 bg-slate-400 bg-transparent transition-all duration-500 ease-in ${open? "top-12" : "top-[-490px]"}`}>
          {NAV_LINKS.map((link)=> (
            <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">{link.label}</Link>
          ))}
        </ul>

        <div onClick={()=> setOpen(!open)}>
          {open ?<Image
        src="x-icon.svg"
        alt="close"
        width={32}
        height={32}
        className="inline-block cursor-pointer md:hidden lg:hidden"/> : <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer md:hidden lg:hidden"
        /> }
        </div>

        <div className="lg:flexCenter hidden">
          <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green"  />
        </div>
    </nav>
    )
}

export default Navbar
"use client"

import Image from "next/image";
import logo from "@/app/logo.jpg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ModeToggle } from './../ThemeToggle/ThemeToggle';
import { signOut, useSession } from "next-auth/react";



const Navbar = () => {

  const { data: session, status} = useSession();

  const links = <>
  <li>
        <Link href="/">Home</Link>
  </li>
  <li>
        <Link href="/shop">Shop</Link>
  </li>
  {
    session?.user?.role === "admin" && 
  <li>
        <Link href="/dashboard">Dashboard</Link>
  </li>
  }
  </>

const router = useRouter();

const handelSignOut = async () => {
    await signOut({ redirect: false});
    router.push("/login");
}




const pathname = usePathname()

if(!pathname.includes("dashboard")){
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="">
          <Image src={logo} height={80} alt="Logo"></Image>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {links}
        </ul>
      </div>
      <div className="navbar-end gap-4">
      <ModeToggle></ModeToggle>

      {
        status === "authenticated" ? (<>
          <div className="flex items-center gap-4">
              <Image src={session?.user?.image} alt="logo" height={10} width={40} className="rounded-full object-fill w-10 h-10"/>
              <button onClick={handelSignOut} className="btn bg-pink-500 text-white rounded-lg">Log Out</button>
          </div>
          
        </>) : (<Link href="/login">
          <button className="btn bg-pink-500 text-white rounded-lg">Login</button>
        </Link>)
      }
      
      </div>
    </div>
  );
}


  return (
    <></>
  );
};

export default Navbar;

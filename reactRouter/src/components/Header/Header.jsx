import React, { useEffect } from 'react'
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { toast } from 'react-toastify';

function Header() {
    const menuItems = [
      { url: "/", title: "Home" },
      { url: "/about", title: "About" },
      { url: "/contact", title: "Contact" },
      // { url: "/github", title: "Github" },
      { url: "/", title: "Log Out" }
        // "Home",
        // "About",
        // "Contact",
        // "Github",
        // "Log Out",
      ];
      const toastNoti = () => {
        toast.success("Add your own code")
      }
  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Your Logo</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Your Logo</p>
        </NavbarBrand>
        <NavbarItem isActive>
          <Link color="warning" href="/" >
          Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="about">
          About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="contact">
          Contact
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link color="foreground" href="github">
            Github
          </Link>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link 
          // href="#" 
          onClick={toastNoti}
          >Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button 
          as={Link} 
          color="warning" 
          // href="#" 
          variant="flat"
          onClick={toastNoti}
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.title}-${index}`}>
            <Link
              className="w-full justify-center"
              color={
                index === 0 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href={item.url}
              onClick={toastNoti}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Header
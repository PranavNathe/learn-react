import React, { useState } from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

//NextUI
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  // const navigate = useNavigate()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItem = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]
  
  return (
    <header >
      <Container>
        <Navbar 
          isBordered
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}  
        >

          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
          </NavbarContent>

          {/* // Logo */}
          <NavbarContent>
            <NavbarBrand>
              <Link to='/'>
                <Logo width='70px'/>
              </Link>
            </NavbarBrand>
          </NavbarContent>

          {/* // Larger Screen :: NavItems */}
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            {navItem.map((item) => item.active ? (
              <NavbarItem key={item.name}>
                <Link color="foreground" to={item.slug}>
                  {item.name}
                </Link>
              </NavbarItem>
            ) : null)}
          </NavbarContent>

          {/* // Logout Button */}
          {authStatus && (
            <NavbarContent justify="end">
              <NavbarItem className="hidden lg:flex">
                <LogoutBtn />
              </NavbarItem>
            </NavbarContent>
          )}

          {/* // Smaller Screen :: NavItems */}
          <NavbarMenu>
            {navItem.map((item, index) => (
              <NavbarMenuItem key={`${item.name}-${index}`}>
                <Link
                  className="w-full"
                  // color={
                  //   index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
                  // }
                  to={item.slug}
                  size="lg"
                >
                  {item.name}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>

        </Navbar>
      </Container>
    </header>
  )
}

export default Header
import React from "react"

import styled from "@emotion/styled"
import tw from "tailwind.macro"

import NavLinks from "./navLinks"

const NavList = styled.div`
  ${tw`
         text-white inline
    `}
`

const NavLogo = styled.div`
  ${tw`
         text-white inline-block float-right
    `}
`

export default ({ children }) => {
  return (
    <nav>
      <NavList>
        <NavLogo>
          <div>Logo</div>
        </NavLogo>
        <NavLinks to="/">Home</NavLinks>
        <NavLinks to="/about">About</NavLinks>
        <NavLinks to="/recipes">Recipes</NavLinks>
        <NavLinks to="/recipeCalculator">Calculator</NavLinks>
      </NavList>
    </nav>
  )
}

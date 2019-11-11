import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <nav>
      <NavList>
        <NavLogo>
          <div>{data.site.siteMetadata.title}</div>
        </NavLogo>
        <NavLinks to="/">Home</NavLinks>
        <NavLinks to="/about">About</NavLinks>
        <NavLinks to="/recipes">Recipes</NavLinks>
      </NavList>
    </nav>
  )
}

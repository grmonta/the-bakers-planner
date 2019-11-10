import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const NavLinks = styled.li`
  ${tw`
          px-1 md:px-2 inline-block
    `}
`

export default props => (
  <NavLinks>
    <li>
      <Link to={props.to}> {props.children} </Link>
    </li>
  </NavLinks>
)

import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const LinkButton = styled.button`
  ${tw`
        bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded
    `}
`

export default props => (
  <LinkButton>
    <Link to={props.to}> {props.children} </Link>
  </LinkButton>
)

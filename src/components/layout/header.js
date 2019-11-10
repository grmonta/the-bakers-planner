import React from "react"

import styled from "@emotion/styled"
import tw from "tailwind.macro"
import Navbar from "./navBar"

const HeaderContainer = styled.header`
  ${tw`
        bg-teal-700 text-white py-4 px-1 md:px-4 
    `}
`

export default props => (
  <HeaderContainer>
    <header>
      <Navbar></Navbar>
    </header>
  </HeaderContainer>
)

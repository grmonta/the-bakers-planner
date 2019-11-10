import React from "react"

import styled from "@emotion/styled"
import tw from "tailwind.macro"

const PageTitle = styled.h1`
  ${tw`
       text-gray-800 text-2xl py-8 text-center max-w-3xl mx-auto px-4 
    `}
`

export default ({ children }) => {
  return <PageTitle>{children}</PageTitle>
}

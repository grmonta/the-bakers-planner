import React from "react"

import styled from "@emotion/styled"
import tw from "tailwind.macro"

const PageTitle = styled.h1`
  ${tw`
       border-b-2  text-gray-800 text-xl font-bold  mt-1 mb-4 mx-auto py-4 px-2 text-center max-w-3xl   
    `}
`

export default ({ children }) => {
  return <PageTitle>{children}</PageTitle>
}

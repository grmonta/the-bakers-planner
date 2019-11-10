import React from "react"

import styled from "@emotion/styled"
import tw from "tailwind.macro"

const PageContent = styled.section`
  ${tw`
       text-gray-800 max-w-3xl mx-auto px-4 
    `}
`

export default ({ children }) => (
  <PageContent>
    <section>{children}</section>
  </PageContent>
)

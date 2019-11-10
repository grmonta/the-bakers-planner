import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const PageContainer = styled.div`
  ${tw`
       max-w-full mx-auto 
    `}
`

const Layout = ({ children }) => <PageContainer>{children}</PageContainer>

export default Layout

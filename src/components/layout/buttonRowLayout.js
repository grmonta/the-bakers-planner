import React from "react"

import styled from "@emotion/styled"
import tw from "tailwind.macro"

const ButtonRowLayout = styled.div`
  ${tw`
         flex justify-center  content-center items-center mx-auto
    `}
`

export default ({ children }) => <ButtonRowLayout>{children} </ButtonRowLayout>

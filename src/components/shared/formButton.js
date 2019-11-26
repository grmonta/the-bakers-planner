import React from "react"

import styled from "@emotion/styled"
import tw from "tailwind.macro"

const FormButton = styled.div`
  ${tw`
        bg-teal-700 hover:bg-teal-800 text-white font-semibold py-1 px-2 rounded mr-2 cursor-pointer text-center
    `}
`

export default props => <FormButton>{props.name}</FormButton>

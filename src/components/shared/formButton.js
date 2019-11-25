import React from "react"

import styled from "@emotion/styled"
import tw from "tailwind.macro"

const FormButton = styled.div`
  ${tw`
        bg-teal-700 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded mr-2 cursor-pointer 
    `}
`

export default props => <FormButton>{props.name}</FormButton>

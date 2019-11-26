import React from "react"

import styled from "@emotion/styled"
import tw from "tailwind.macro"

const DeleteButton = styled.div`
  ${tw`
        bg-red-700 hover:bg-red-800 text-white font-semibold py-1 px-2 rounded mr-2 cursor-pointer text-center
    `}
`

export default props => <DeleteButton>{props.name}</DeleteButton>

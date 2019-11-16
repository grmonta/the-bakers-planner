import React from "react"

import styled from "@emotion/styled"
import tw from "tailwind.macro"

const LabelContainer = styled.div`
  ${tw`
    md:w-1/3
      
  `}
`
const FormLabel = styled.label`
  ${tw` 
block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-1 
  `}
`

export default props => (
  <LabelContainer>
    <FormLabel>
      <label htmlFor={props.for}>{props.labelName}</label>
    </FormLabel>
  </LabelContainer>
)

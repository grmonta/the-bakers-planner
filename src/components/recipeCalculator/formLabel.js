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
block text-gray-900 sm:text-sm text-semibold text-sm  mt-2 pr-1 
  `}
`

export default props => (
  <LabelContainer>
    <FormLabel>
      <label htmlFor={props.for}>{props.labelName}</label>
    </FormLabel>
  </LabelContainer>
)

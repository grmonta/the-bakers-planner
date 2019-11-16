import React from "react"

import styled from "@emotion/styled"
import tw from "tailwind.macro"

const InputContainer = styled.div`
  ${tw`
  md:w-1/3
`}
`

const FormInput = styled.div`
  ${tw` 
    appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-2 px-2 mb-3 leading-tight  md:mr-2 focus:outline-none focus:bg-white

  `}
`

export default props => (
  <FormInput>
    <input
      type={props.type}
      name={props.id}
      id={props.id}
      placeholder={props.placeholder}
      min={props.min}
      max={props.max}
    />
  </FormInput>
)

import React from "react"
import Moment from "react-moment"

import styled from "@emotion/styled"
import tw from "tailwind.macro"
import FormLabel from "./formLabel"
import FormInput from "./formInput"

const RecipeFormContainer = styled.form`
  ${tw` 
    w-full max-w-lg
  `}
`

const RecipeFormWrapper = styled.div`
  ${tw`
   md:flex md:items-center mb-6
  
  `}
`

const Excerpt = styled.p`
  ${tw` 
  text-pink-500
  `}
`
// from moment
const date = new Date()

export default props => (
  <RecipeFormContainer>
    <RecipeFormWrapper>
      <FormLabel labelName="Name of Step" for="Step Name" />
      <FormInput
        type="text"
        name="nameS"
        id="name-of-step"
        placeholder="ex: first proof"
      />

      <FormLabel labelName="Time" for="time of step" />
      <FormInput
        type="number"
        name="nameS"
        id="name-of-step"
        placeholder="ex: first proof"
        min="0"
        max="1000"
      />
    </RecipeFormWrapper>
    {/* pass props into moment with user form data for hours days and mins */}
    Start:
    <Moment add={{ hours: 12 }} format=" dddd @ h:mm A">
      {date}
    </Moment>
    <br />
    <Moment
      subtract={{ days: 1, hours: 10, minutes: 30 }}
      format=" dddd @ h:mm A"
    >
      {date}
    </Moment>
  </RecipeFormContainer>
)

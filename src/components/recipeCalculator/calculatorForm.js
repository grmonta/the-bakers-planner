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
   md:flex md:flex-wrap md:items-center mb-6
  
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
    {/* pass props into moment with user form data for hours days and mins */}
    Start:
    <Moment add={{ hours: 12 }} format=" dddd @ h:mm A">
      {date}
    </Moment>
    <br />
    End:
    <Moment
      subtract={{ days: 1, hours: 10, minutes: 30 }}
      format=" dddd @ h:mm A"
    >
      {date}
    </Moment>
    <RecipeFormWrapper>
      <FormLabel labelName="Start Date" for="start date" />
      <FormInput type="date" name="nameS" id="name-of-step" />
      <FormLabel labelName="Start Time" for="start time" />
      <FormInput type="time" name="nameS" id="name-of-step" />
      <FormLabel labelName="Name" for="Step Name" />
      <FormInput
        type="text"
        name="nameS"
        id="name-of-step"
        placeholder="ex: first proof"
      />

      <FormLabel labelName="Hours" for="minutes of step" />
      <FormInput
        type="number"
        name="hours"
        id="name-of-step"
        placeholder="1"
        min="0"
        max="1000"
      />
      <FormLabel labelName="Minutes" for="minutes of step" />
      <FormInput
        type="number"
        name="hours"
        id="name-of-step"
        placeholder="45"
        min="0"
        max="60"
      />
      <p>add one button</p>
      <p>final submit button</p>
    </RecipeFormWrapper>
  </RecipeFormContainer>
)

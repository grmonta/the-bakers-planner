import React from "react"
import Moment from "react-moment"

import styled from "@emotion/styled"
import tw from "tailwind.macro"

const RecipeFormContainer = styled.form`
  ${tw` 
    w-full max-w-lg
  `}
`

const RecipeFormWrapper = styled.div`
  ${tw`
   flex flex-wrap mx-3 mb-6
  
  `}
`

const Label = styled.label`
  ${tw` 
block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2
  `}
`

const Title = styled.h1`
  ${tw`
    text-purple-500
      
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
      <Label>Yo</Label>
      <Excerpt>yo could be props</Excerpt>
      <Title></Title>
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

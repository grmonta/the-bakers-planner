import React from "react"
import Moment from "react-moment"

import styled from "@emotion/styled"
import tw from "tailwind.macro"

const RecipeFormContainer = styled.section`
  ${tw` 
    p-4 border-t mt-6
  `}
`

const RecipeFormWrapper = styled.div`
  ${tw`
   py-2
  
  `}
`

const Title = styled.h1`
  ${tw`
    text-purple-500
      
  `}
`

const Description = styled.h2`
  ${tw` 
text-red-500
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
      <Title>
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
      </Title>

      <Description>yo could be props</Description>
      <Excerpt>yo could be props</Excerpt>
    </RecipeFormWrapper>
  </RecipeFormContainer>
)

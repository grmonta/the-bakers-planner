import React from "react"

import styled from "@emotion/styled"
import tw from "tailwind.macro"

const RecipesContainer = styled.section`
  ${tw` 
    p-4 border-t
  `}
`

const RecipeWrapper = styled.div`
  ${tw`
   py-2
  
  `}
`

const Title = styled.h1`
  ${tw`
    text-purple-500
      
  `}
`

const DatePublished = styled.p`
  ${tw`
  text-green-500
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
export default props => (
  <RecipesContainer>
    <RecipeWrapper>
      <Title>{props.title} </Title>
      <DatePublished>{props.datePublished}</DatePublished>
      <Description>{props.description}</Description>
      <Excerpt>{props.excerpt}</Excerpt>
    </RecipeWrapper>
  </RecipesContainer>
)

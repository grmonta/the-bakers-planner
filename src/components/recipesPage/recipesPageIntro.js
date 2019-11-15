import React from "react"

import styled from "@emotion/styled"
import tw from "tailwind.macro"

const RecipesPageIntro = styled.h2`
  ${tw` 
    text-sm md:text-lg mb-6
  `}
`

export default () => (
  <RecipesPageIntro>
    Scroll through some of our favorite recipes or use our calculator for your
    own recipes!
  </RecipesPageIntro>
)

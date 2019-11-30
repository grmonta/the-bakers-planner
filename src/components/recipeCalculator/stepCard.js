import React from "react"
import PropTypes from "prop-types"

import styled from "@emotion/styled"
import tw from "tailwind.macro"

const CardContainer = styled.div`
  ${tw` 
     mb-4 max-w-sm flex w-full border border-black
  `}
`
const LeftContent = styled.div`
  ${tw` 
    py-2 bg-pink-400 w-2/3
  `}
`

const RightContent = styled.div`
  ${tw` 
    py-2 bg-blue-400 w-1/3
  `}
`

const ButtonRow = styled.div`
  ${tw` 
     mb-2  my-1 

  `}
`
const EditButton = styled.button`
  ${tw` 
     mb-2
bg-white  hover:bg-teal-700 hover:text-white text-teal-700 border border-teal-800 font-semibold py-1 px-2 rounded mr-2 cursor-pointer text-center
  `}
`

const DeleteButton = styled.button`
  ${tw` 
    mb-2
bg-white hover:bg-red-800 hover:text-white text-red-700 border border-red-700 font-semibold py-1 px-2 rounded mr-2 cursor-pointer text-center
  `}
`

const CardContent = styled.div`
  ${tw` 
    flex flex-col

  `}
`

const CardTitle = styled.h4`
  ${tw` 
    text-green-900

  `}
`

const CardTime = styled.p`
  ${tw` 
    text-green-400

  `}
`

export const StepCard = ({
  toggleEditing,
  step,
  onChange,
  index,
  onDelete,
}) => (
  <CardContainer>
    {step.isEditing ? (
      <CardContainer>
        <LeftContent>
          <input
            type="text"
            name="name"
            placeholder="Step Name*"
            value={step.name}
            onChange={event => onChange(event, index)}
            required
          />
          <input
            type="number"
            name="hours"
            min="0"
            max="1000"
            placeholder="Hours*"
            value={step.hours}
            onChange={event => onChange(event, index)}
            required
          />
          <input
            type="number"
            name="minutes"
            min="0"
            max="59"
            placeholder="Minutes*"
            value={step.minutes}
            onChange={event => onChange(event, index)}
            required
          />
        </LeftContent>
      </CardContainer>
    ) : (
      <LeftContent>
        <CardContent>
          <CardTitle>{step.name}</CardTitle>
          <CardTime>{step.hours} hours</CardTime>
          <CardTime>{step.minutes} minutes</CardTime>
        </CardContent>
      </LeftContent>
    )}

    <RightContent>
      <ButtonRow>
        <EditButton type="button" onClick={toggleEditing}>
          {step.isEditing ? "Save" : "Edit"}
        </EditButton>

        <DeleteButton type="button" onClick={onDelete}>
          Delete
        </DeleteButton>
      </ButtonRow>
    </RightContent>
  </CardContainer>
)

StepCard.propTypes = {
  step: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired,
    minutes: PropTypes.string.isRequired,
  }),
  toggleEditing: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

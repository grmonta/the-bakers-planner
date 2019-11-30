import React from "react"
import PropTypes from "prop-types"

import styled from "@emotion/styled"
import tw from "tailwind.macro"
import FormLabel from "./formLabel"

const CardContainer = styled.div`
  ${tw` 
     mt-2 max-w-sm flex flex-col w-full border rounded border-gray-400  px-3 py-2 mb-4 bg-gray-200
  `}
`
const LeftContent = styled.div`
  ${tw` 
     w-2/3
     
  `}
`

const RightContent = styled.div`
  ${tw` 
      w-1/2
  `}
`

const CardContent = styled.div`
  ${tw` 
    flex flex-col 

  `}
`

const CardTitle = styled.h4`
  ${tw` 
    text-gray-900 text-lg 

  `}
`

const CardTime = styled.div`
  ${tw` 
    text-gray-900 pr-2 pb-2

  `}
`

const PrimaryText = styled.span`
  ${tw` 
    text-gray-900 text-xl pr-1 font-semibold

  `}
`
const SecondaryText = styled.span`
  ${tw` 
    text-gray-600 text-xs font-semibold pr-2

  `}
`

const ButtonRow = styled.div`
  ${tw` 
      inline-flex mt-2

  `}
`
const EditButton = styled.button`
  ${tw` 
     
 hover:underline text-gray-700  hover:text-teal-700  text-sm font-semibold py-1  rounded  cursor-pointer pr-1
  `}
`

const DeleteButton = styled.button`
  ${tw` 
    
 hover:underline hover:text-red-700 text-gray-700 text-sm font-semibold py-1 px-2 rounded cursor-pointer
  `}
`

const InputGroup = styled.div`
  ${tw`
  flex 
`}
`

const FormInputContainer = styled.div`
  ${tw`
  w-full  
`}
`

const FormInputHalf = styled.div`
  ${tw`
  w-1/2  
`}
`
const FormInputStyle = styled.input`
  ${tw` 
      border-2 border-gray-400 rounded w-full px-1 text-gray-900 leading-normal  focus:bg-white focus:border-purple-700 

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
      <LeftContent>
        <InputGroup>
          <FormInputContainer>
            <FormLabel for="step name" labelName="Step Name" />
            <FormInputStyle
              type="text"
              name="name"
              value={step.name}
              onChange={event => onChange(event, index)}
              required
            />
            <FormLabel for="step name" labelName="Hours" />
            <FormInputStyle
              type="number"
              name="hours"
              min="0"
              max="1000"
              value={step.hours}
              onChange={event => onChange(event, index)}
              required
            />
            <FormLabel for="step name" labelName="Minutes" />
            <FormInputStyle
              type="number"
              name="minutes"
              min="0"
              max="59"
              value={step.minutes}
              onChange={event => onChange(event, index)}
              required
            />
          </FormInputContainer>
        </InputGroup>
      </LeftContent>
    ) : (
      <LeftContent>
        <CardTime>
          <CardTitle>{step.name}</CardTitle>
          <PrimaryText>{step.hours}</PrimaryText>
          <SecondaryText>hour(s)</SecondaryText>
          <PrimaryText>{step.minutes}</PrimaryText>
          <SecondaryText>minute(s)</SecondaryText>
        </CardTime>
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

import React from "react"
import PropTypes from "prop-types"

import styled from "@emotion/styled"
import tw from "tailwind.macro"
import FormLabel from "./formLabel"

const FormContainer = styled.div`
  ${tw`
  w-full    border border-gray-400 p-2 sm:p-2 rounded
  `}
`

const InputGroup = styled.div`
  ${tw`
  flex flex-wrap -mx-3  items-center 
`}
`

const FormInputContainer = styled.div`
  ${tw`
  w-full  px-3 mb-2 sm:mb-1
`}
`

const FormInputHalf = styled.div`
  ${tw`
  w-1/2 px-3 mb-3 
`}
`

const FormInstructions = styled.p`
  ${tw`
  text-sm text-gray-700 px-3 font-medium
`}
`
const FormInputStyle = styled.input`
  ${tw` 
    bg-gray-300  border-2 border-gray-300 rounded w-full py-1 px-1 text-gray-900 leading-normal  focus:bg-white focus:border-purple-700 

  `}
`

const ButtonRow = styled.div`
  ${tw` 


  `}
`
const Button = styled.button`
  ${tw` 
    bg-teal-700 hover:bg-purple-800  text-white font-semibold py-1 px-3 rounded mr-2 cursor-pointer   text-center

  `}
`

export const AddStep = ({ name, hours, minutes, onChange, onSubmit }) => (
  <FormContainer>
    <form onSubmit={onSubmit}>
      <InputGroup>
        <FormInstructions>Add each step below:</FormInstructions>
        <FormInputContainer>
          <FormLabel for="step name" />
          <FormInputStyle
            type="text"
            placeholder="Step Name*"
            name="name"
            value={name}
            required
            onChange={onChange}
          />
        </FormInputContainer>
        <FormInputHalf>
          <FormLabel for="hours input" />
          <FormInputStyle
            type="number"
            min="0"
            max="1000"
            required
            placeholder="Hours*"
            name="hours"
            value={hours}
            onChange={onChange}
          />
        </FormInputHalf>

        <FormInputHalf>
          <FormLabel for="minutes input" />
          <FormInputStyle
            type="number"
            min="0"
            max="59"
            required
            placeholder="Minutes*"
            name="minutes"
            value={minutes}
            onChange={onChange}
          />
        </FormInputHalf>
      </InputGroup>
      <ButtonRow>
        <Button type="submit">Add</Button>
      </ButtonRow>
    </form>
  </FormContainer>
)

AddStep.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  minutes: PropTypes.string.isRequired,
}

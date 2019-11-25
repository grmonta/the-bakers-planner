import React from "react"
import PropTypes from "prop-types"

import styled from "@emotion/styled"
import tw from "tailwind.macro"
import FormLabel from "./formLabel"

const FormContainer = styled.div`
  ${tw`
  w-full max-w-lg mx-auto
  `}
`

const InputGroup = styled.div`
  ${tw`
  flex flex-wrap -mx-3 mb-2 items-center 
`}
`

const FormInputContainer = styled.div`
  ${tw`
  w-full  px-3 mb-6 md:mb-0
`}
`

const FormInputHalf = styled.div`
  ${tw`
  w-1/2 px-3 mb-6 md:mb-0
`}
`

const FormInputStyle = styled.div`
  ${tw` 
    bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500

  `}
`

const ButtonRow = styled.div`
  ${tw` 
    w-1/3 mx-auto

  `}
`

const FormButton = styled.div`
  ${tw`
        bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded mr-2 cursor-pointer
    `}
`

export const AddStep = ({ name, hours, minutes, onChange, onSubmit }) => (
  <FormContainer>
    <form onSubmit={onSubmit} className="form-inline">
      <InputGroup>
        <FormInputContainer>
          <FormLabel for="step name" labelName="Name of Step" />
          <FormInputStyle>
            <input
              type="text"
              placeholder="ex: first proof"
              name="name"
              value={name}
              required
              onChange={onChange}
            />
          </FormInputStyle>
        </FormInputContainer>
        <FormInputHalf>
          <FormLabel for="hours input" labelName="Hours*" />
          <FormInputStyle>
            <input
              type="number"
              min="0"
              max="1000"
              required
              placeholder="0"
              name="hours"
              value={hours}
              onChange={onChange}
            />
          </FormInputStyle>
        </FormInputHalf>

        <FormInputHalf>
          <FormLabel for="minutes input" labelName="Minutes*" />
          <FormInputStyle>
            <input
              type="number"
              min="0"
              max="59"
              required
              placeholder="0"
              name="minutes"
              value={minutes}
              onChange={onChange}
            />
          </FormInputStyle>
        </FormInputHalf>
      </InputGroup>
      <ButtonRow>
        <FormButton>
          <button type="submit">Add Step </button>
        </FormButton>
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

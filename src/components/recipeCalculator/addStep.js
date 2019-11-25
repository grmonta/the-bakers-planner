import React from "react"
import PropTypes from "prop-types"

import styled from "@emotion/styled"
import tw from "tailwind.macro"
import FormLabel from "./formLabel"
import FormButton from "../shared/formButton"
const FormInputContainer = styled.div`
  ${tw`
  w-full
`}
`
const FormInputStyle = styled.div`
  ${tw` 
    appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-2 px-2 mb-3 leading-tight  md:mr-2 focus:outline-none focus:bg-white

  `}
`

export const AddStep = ({ name, hours, minutes, onChange, onSubmit }) => (
  <div className="row justify-content-center">
    <form onSubmit={onSubmit} className="form-inline">
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
      <FormInputContainer>
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
      </FormInputContainer>

      <FormInputContainer>
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
      </FormInputContainer>
      <FormButton name="Add Step">
        <button type="submit"></button>
      </FormButton>
    </form>
  </div>
)

AddStep.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  minutes: PropTypes.string.isRequired,
}

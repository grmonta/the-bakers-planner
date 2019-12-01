import React from "react"
import PropTypes from "prop-types"

import styled from "@emotion/styled"
import tw from "tailwind.macro"

import FormContainer from "./formContainer"
import InputGroup from "./inputGroup"
import FormInputContainer from "./formInputContainer"
import FromInputHalf from "./formInputHalf"
import FormInstructions from "./formInstructions"
import FormInputStyle from "./formInputStyle"
import Button from "../shared/formButton"

export const PickEndTime = ({ endDay, endTime, onChange, onSubmit }) => (
  <FormContainer>
    <form onSubmit={onSubmit}>
      <InputGroup>
        <FormInstructions>Choose end time:</FormInstructions>
        <FormInputContainer>
          <FormInputStyle
            type="date"
            placeholder="End Day*"
            name="endDay"
            value={endDay}
            required
            onChange={onChange}
          />
        </FormInputContainer>
        <FormInputContainer>
          <FormInputStyle
            type="time"
            required
            placeholder="End Time*"
            name="endTime"
            value={endTime}
            onChange={onChange}
          />
        </FormInputContainer>
      </InputGroup>
      <Button type="submit">Calculate </Button>
    </form>
  </FormContainer>
)

PickEndTime.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  endDay: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
}

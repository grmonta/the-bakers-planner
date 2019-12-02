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

export const PickTime = ({ startDay, startTime, onChange, onSubmit }) => (
  <FormContainer>
    <form onSubmit={onSubmit}>
      <InputGroup>
        <FormInstructions>Choose start time:</FormInstructions>
        <FormInputContainer>
          <FormInputStyle
            type="date"
            placeholder="Start Day*"
            name="startDay"
            value={startDay}
            required
            onChange={onChange}
          />
        </FormInputContainer>
        <FormInputContainer>
          <FormInputStyle
            type="time"
            required
            placeholder="Start Time*"
            name="startTime"
            value={startTime}
            onChange={onChange}
          />
        </FormInputContainer>
      </InputGroup>
      <Button type="submit">Recalculate</Button>
    </form>
  </FormContainer>
)

PickTime.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  startDay: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
}

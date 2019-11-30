import React from "react"
import PropTypes from "prop-types"

import styled from "@emotion/styled"
import tw from "tailwind.macro"
import FormLabel from "./formLabel"

export const PickTime = ({ startDay, startTime, onChange, onSubmit }) => (
  <div>
    <form onSubmit={onSubmit}>
      <input
        type="date"
        placeholder="Start Day*"
        name="startDay"
        value={startDay}
        required
        onChange={onChange}
      />

      <input
        type="time"
        required
        placeholder="Start Time*"
        name="startTime"
        value={startTime}
        onChange={onChange}
      />

      <button type="submit">Set Start Time </button>
    </form>
  </div>
)

PickTime.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  startDay: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
}

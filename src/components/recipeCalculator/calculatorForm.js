import React, { useState } from "react"
import Moment from "react-moment"

import styled from "@emotion/styled"
import tw from "tailwind.macro"
import FormLabel from "./formLabel"
import FormInput from "./formInput"

const RecipeFormContainer = styled.div`
  ${tw` 
    w-full max-w-lg
  `}
`

const RecipeFormWrapper = styled.div`
  ${tw`
   md:flex md:flex-wrap md:items-center mb-6
  
  `}
`

// from moment
const date = new Date()

export default props => {
  const [form, setValues] = useState({
    startDate: "",
    startTime: "",
    stepName: "",
    hours: "",
    minutes: "",
  })

  const printValues = e => {
    e.preventDefault()
    console.log(
      form.startDate,
      form.startTime,
      form.stepName,
      form.hours,
      form.minutes
    )
  }

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <RecipeFormContainer>
      <form onSubmit={printValues}>
        {/* pass props into moment with user form data for hours days and mins */}
        Start:
        <Moment add={{ hours: 12 }} format=" dddd @ h:mm A">
          {date}
        </Moment>
        <br />
        End:
        <Moment
          subtract={{ days: 1, hours: 10, minutes: 30 }}
          format=" dddd @ h:mm A"
        >
          {date}
        </Moment>
        <RecipeFormWrapper>
          <FormLabel labelName="Start Date" for="start date" />
          <FormInput
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={updateField}
          />
          <FormLabel labelName="Start Time" for="start time" />
          <FormInput
            type="time"
            name="startTime"
            value={form.startTime}
            onChange={updateField}
          />
          <FormLabel labelName="Name" for="Step Name" />
          <FormInput
            type="text"
            name="stepName"
            placeholder="ex: first proof"
            value={form.stepName}
            onChange={updateField}
          />

          <FormLabel labelName="Hours" for="minutes of step" />
          <FormInput
            type="number"
            name="hours"
            placeholder="1"
            min="0"
            max="1000"
            value={form.hours}
            onChange={updateField}
          />
          <FormLabel labelName="Minutes" for="minutes of step" />
          <FormInput
            type="number"
            name="minutes"
            placeholder="45"
            min="0"
            max="60"
            value={form.minutes}
            onChange={updateField}
          />
          <p>add one button</p>
          <p>final submit button</p>
          <button type="submit">Submit</button>
        </RecipeFormWrapper>
      </form>
    </RecipeFormContainer>
  )
}

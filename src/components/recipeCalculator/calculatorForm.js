import React, { useState } from "react"
import Moment from "react-moment"

import styled from "@emotion/styled"
import tw from "tailwind.macro"
import FormLabel from "./formLabel"
import StepCard from "./stepCard"

import ButtonRowLayout from "../layout/buttonRowLayout"

const RecipeFormContainer = styled.div`
  ${tw` 
    w-full max-w-lg mx-auto
  `}
`

const RecipeFormWrapper = styled.div`
  ${tw`
   md:flex md:flex-wrap md:items-center mb-6
  
  `}
`

const InputContainer = styled.div`
  ${tw`
  w-full
`}
`

const FormInput = styled.div`
  ${tw` 
    appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-2 px-2 mb-3 leading-tight  md:mr-2 focus:outline-none focus:bg-white

  `}
`

const FormButton = styled.div`
  ${tw`
        bg-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded mr-2 cursor-pointer
    `}
`

// from moment
const date = new Date()

export default function(props) {
  const [form, setValues] = useState({
    startDate: "",
    startTime: "",
    stepName: "",
    hours: "",
    minutes: "",
  })

  const [steps, setSteps] = useState([])

  const [totalHours, setHours] = useState(0)

  const [totalMinutes, setMinutes] = useState(0)

  const resetForm = () => {
    setValues({
      startDate: "",
      startTime: "",
      stepName: "",
      hours: "",
      minutes: "",
    })
  }

  const addStep = e => {
    e.preventDefault()

    const name = form.stepName
    const hours = form.hours
    const minutes = form.minutes

    const stepsInState = steps

    const stepsArrayLength = stepsInState.length
    const id = stepsArrayLength ? stepsInState[stepsArrayLength - 1].id + 1 : 1
    const stepInfo = {
      name: name,
      hours: hours,
      minutes: minutes,
      id: id,
    }

    setSteps(steps => [...steps, stepInfo])
    setHours(totalHours + parseInt(hours))
    setMinutes(totalMinutes + parseInt(minutes))

    console.log({ steps })
    console.log({ minutes })
    resetForm()
  }

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const updateStepAtIndex = (e, index) => {
    console.log("click")
  }

  const handleClick = e => {
    console.log(totalHours)
    console.log(totalMinutes)
  }

  return (
    <RecipeFormContainer>
      <form onSubmit={addStep}>
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
          {/* <FormLabel labelName="Start Date" for="start date" />
          <InputContainer>
            <FormInput>
              <input
                value={form.startDate}
                type="date"
                name="startDate"
                onChange={updateField}
              />
            </FormInput>
          </InputContainer>
          <FormLabel labelName="Start Time" for="start time" />
          <InputContainer>
            <FormInput>
              {" "}
              <input
                type="time"
                name="startTime"
                value={form.startTime}
                onChange={updateField}
              />
            </FormInput>
          </InputContainer> */}

          <FormLabel labelName="Name" for="Step Name" />
          <InputContainer>
            <FormInput>
              <input
                type="text"
                name="stepName"
                placeholder="ex: first proof"
                value={form.stepName}
                onChange={updateField}
              />
            </FormInput>
          </InputContainer>
          <FormLabel labelName="Hours*" for="minutes of step" />
          <InputContainer>
            <FormInput>
              <input
                type="number"
                name="hours"
                min="0"
                max="1000"
                value={form.hours}
                onChange={updateField}
                required
              />
            </FormInput>
          </InputContainer>
          <FormLabel labelName="Minutes*" for="minutes of step" />
          <InputContainer>
            <FormInput>
              <input
                type="number"
                name="minutes"
                min="0"
                max="60"
                value={form.minutes}
                onChange={updateField}
                required
              />
            </FormInput>
          </InputContainer>
          <ButtonRowLayout>
            <FormButton name="add step">
              <button type="submit">Add Step</button>
            </FormButton>
          </ButtonRowLayout>
        </RecipeFormWrapper>
      </form>
      <FormButton>
        <button onClick={handleClick}>Final Totals </button>
      </FormButton>
      <div>{form.stepName}</div>
      <div>
        {steps.map((step, index) => (
          <div>
            <StepCard
              key={step.id}
              index={index}
              name={step.name}
              step={step}
              hours={step.hours}
              mins={step.minutes}
              updateStepAtIndex={updateStepAtIndex}
            />
          </div>
        ))}
      </div>
    </RecipeFormContainer>
  )
}

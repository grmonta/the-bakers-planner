import React, { useState } from "react"
import Moment from "react-moment"

import styled from "@emotion/styled"
import tw from "tailwind.macro"
import FormLabel from "./formLabel"

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

  const printValues = e => {
    e.preventDefault()
    console.log(
      form.startDate,
      form.startTime,
      form.stepName,
      form.hours,
      form.minutes,
      "click"
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
        <Moment add={{ hours: 12 }} format=' dddd @ h:mm A'>
          {date}
        </Moment>
        <br />
        End:
        <Moment
          subtract={{ days: 1, hours: 10, minutes: 30 }}
          format=' dddd @ h:mm A'
        >
          {date}
        </Moment>
        <RecipeFormWrapper>
          <FormLabel labelName='Start Date' for='start date' />
          <InputContainer>
            <FormInput>
              <input
                value={form.startDate}
                type='date'
                name='startDate'
                onChange={updateField}
              />
            </FormInput>
          </InputContainer>
          <FormLabel labelName='Start Time' for='start time' />
          <InputContainer>
            <FormInput>
              {" "}
              <input
                type='time'
                name='startTime'
                value={form.startTime}
                onChange={updateField}
              />
            </FormInput>
          </InputContainer>

          <FormLabel labelName='Name' for='Step Name' />
          <InputContainer>
            <FormInput>
              <input
                type='text'
                name='stepName'
                placeholder='ex: first proof'
                value={form.stepName}
                onChange={updateField}
              />
            </FormInput>
          </InputContainer>
          <FormLabel labelName='Hours' for='minutes of step' />
          <InputContainer>
            <FormInput>
              <input
                type='number'
                name='hours'
                min='0'
                max='1000'
                value={form.hours}
                onChange={updateField}
              />
            </FormInput>
          </InputContainer>
          <FormLabel labelName='Minutes' for='minutes of step' />
          <InputContainer>
            <FormInput>
              <input
                type='number'
                name='minutes'
                min='0'
                max='60'
                value={form.minutes}
                onChange={updateField}
              />
            </FormInput>
          </InputContainer>
          <ButtonRowLayout>
            <FormButton name='Add Step'>
              <button>Add Step</button>
            </FormButton>
            <FormButton name='Calculate'>
              <button type='submit'>Calculate</button>
            </FormButton>
          </ButtonRowLayout>
        </RecipeFormWrapper>
      </form>
    </RecipeFormContainer>
  )
}

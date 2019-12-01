import React, { Component, Fragment } from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import CalculatorIntro from "./calculatorIntro"
import Moment from "react-moment"
import { StepCard } from "./stepCard"
import { AddStep } from "./addStep"
import { PickTime } from "./pickTime"

const CalculatorPageFlexContainer = styled.div`
  ${tw`
  flex flex-wrap
  `}
`

const HalfWidthContainer = styled.div`
  ${tw`
  w-full sm:w-1/2 pr-2
  `}
`

class CalculatorApp extends Component {
  state = {
    name: "",
    hours: "",
    minutes: "",

    steps: [],
    totalHours: 0,
    totalMinutes: 0,
    startDay: "",
    startTime: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleTimeInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  addStep = event => {
    event.preventDefault()
    const { name, hours, minutes } = this.state

    const stepsInState = this.state.steps
    const stepsArrayLength = stepsInState.length
    const id = stepsArrayLength ? stepsInState[stepsArrayLength - 1].id + 1 : 1

    this.setState({
      steps: [
        ...stepsInState,
        Object.assign(
          {},
          {
            name: name,
            hours: hours,
            minutes: minutes,
            id: id,
          }
        ),
      ],
      name: "",
      minutes: "",
      hours: "",
    })
  }

  toggleStepEditing = index => {
    this.setState({
      steps: this.state.steps.map((step, stepIndex) => {
        if (stepIndex === index) {
          return {
            ...step,
            isEditing: !step.isEditing,
          }
        }
        return step
      }),
    })
    console.log(index)
  }

  handleStepUpdate = (event, index) => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      steps: this.state.steps.map((step, stepIndex) => {
        if (stepIndex === index) {
          return {
            ...step,
            [name]: value,
          }
        }
        return step
      }),
    })
  }

  onDelete = index => {
    this.setState({
      steps: [
        ...this.state.steps.slice(0, index),
        ...this.state.steps.slice(index + 1),
      ],
    })
  }

  pickTime = event => {
    event.preventDefault()
    const { totalHours, totalMinutes, steps } = this.state

    const minutesArray = []
    const hoursArray = []

    const addToArray = steps.map(step => {
      hoursArray.push(parseInt(step.hours))
      minutesArray.push(parseInt(step.minutes))
    })

    const minutesArrayTotal = minutesArray.reduce((a, b) => a + b, 0)

    const hoursArrayTotal = hoursArray.reduce((a, b) => a + b, 0)

    this.setState(state => ({
      totalHours: hoursArrayTotal,
      totalMinutes: minutesArrayTotal,
    }))
  }

  render() {
    const {
      name,
      hours,
      minutes,
      startTime,
      startDay,
      totalHours,
      totalMinutes,
    } = this.state

    return (
      <Fragment>
        <CalculatorIntro>
          Try out your own recipe by adding each step and it's time below! Then
          you can calculate when it will be done.
        </CalculatorIntro>
        <CalculatorPageFlexContainer>
          <HalfWidthContainer>
            <AddStep
              name={name}
              hours={hours}
              minutes={minutes}
              onChange={this.handleInputChange}
              onSubmit={this.addStep}
            />
          </HalfWidthContainer>

          <HalfWidthContainer>
            <PickTime
              startTime={startTime}
              startDay={startDay}
              onChange={this.handleTimeInputChange}
              onSubmit={this.pickTime}
            />
            <button> </button>
            <Moment
              format="dddd @ hh:mm a"
              add={{ hours: totalHours, minutes: totalMinutes }}
            >
              {`${startDay} ${startTime}`}
            </Moment>
          </HalfWidthContainer>

          <HalfWidthContainer>
            {this.state.steps.map((step, index) => (
              <StepCard
                key={step.id}
                index={index}
                step={step}
                toggleEditing={() => this.toggleStepEditing(index)}
                onDelete={() => this.onDelete(index)}
                onChange={this.handleStepUpdate}
              />
            ))}
          </HalfWidthContainer>
        </CalculatorPageFlexContainer>
      </Fragment>
    )
  }
}

export default CalculatorApp

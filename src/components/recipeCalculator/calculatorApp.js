import React, { Component, Fragment } from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import CalculatorIntro from "./calculatorIntro"
import Moment from "react-moment"
import { StepCard } from "./stepCard"
import { AddStep } from "./addStep"
import { PickTime } from "./pickTime"
import { PickEndTime } from "./pickEndTime"
import CalculatorPageFlexContainer from "./CalculatorPageFlexContainer"
import HalfWidthContainer from "./HalfWidthContainer"
import TimeFlexContainer from "./TimeFlexContainer"
import FlexFullContainer from "./FlexFullContainer"
import FlexHalfContainer from "./FlexHalfContainer"

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
    endDay: "",
    endTime: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleStartTimeInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleEndTimeInputChange = event => {
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

  pickStartTime = event => {
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

  pickEndTime = event => {
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
      endTime,
      endDay,
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

          <TimeFlexContainer>
            <FlexFullContainer>
              <PickTime
                startTime={startTime}
                startDay={startDay}
                onChange={this.handleStartTimeInputChange}
                onSubmit={this.pickStartTime}
              />

              {startTime === "" && startDay === "" ? (
                <div></div>
              ) : (
                <Fragment>
                  <Moment
                    format="dddd @ hh:mm a"
                    add={{ hours: totalHours, minutes: totalMinutes }}
                  >
                    {`${startDay} ${startTime}`}
                  </Moment>

                  <p>Finish Time</p>
                </Fragment>
              )}
            </FlexFullContainer>
            <FlexFullContainer>
              <PickEndTime
                endTime={endTime}
                endDay={endDay}
                onChange={this.handleEndTimeInputChange}
                onSubmit={this.pickEndTime}
              />

              {endTime === "" && endDay === "" ? (
                <div></div>
              ) : (
                <Fragment>
                  <Moment
                    format="dddd @ hh:mm a"
                    subtract={{ hours: totalHours, minutes: totalMinutes }}
                  >
                    {`${endDay} ${endTime}`}
                  </Moment>
                  <p>Start Time</p>
                </Fragment>
              )}
            </FlexFullContainer>
          </TimeFlexContainer>

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

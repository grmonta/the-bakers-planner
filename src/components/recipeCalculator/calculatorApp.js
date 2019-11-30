import React, { Component, Fragment } from "react"
import CalculatorIntro from "./calculatorIntro"
import Moment from "react-moment"
import { StepCard } from "./stepCard"
import { AddStep } from "./addStep"
import { PickTime } from "./pickTime"

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
    const { name, hours, minutes, totalHours, totalMinutes } = this.state
    const integerHours = parseInt(hours)
    const integerMinutes = parseInt(minutes)

    const stepsInState = this.state.steps
    const stepsArrayLength = stepsInState.length
    const id = stepsArrayLength ? stepsInState[stepsArrayLength - 1].id + 1 : 1

    this.setState(state => ({
      totalHours: integerHours + parseInt(this.state.totalHours),
      totalMinutes: integerMinutes + parseInt(this.state.totalMinutes),
    }))

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
    console.log({ totalHours })
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

    console.log(this.state.startTime)
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

        <div>
          <AddStep
            name={name}
            hours={hours}
            minutes={minutes}
            onChange={this.handleInputChange}
            onSubmit={this.addStep}
          />
          <br />
          <div>
            <PickTime
              startTime={startTime}
              startDay={startDay}
              onChange={this.handleTimeInputChange}
              onSubmit={this.pickTime}
            />
          </div>

          <div>
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
          </div>
        </div>
        <div>
          <Moment
            format="dddd @ hh:mm a"
            add={{ hours: totalHours, minutes: totalMinutes }}
          >
            {`${startDay} ${startTime}`}
          </Moment>
        </div>
      </Fragment>
    )
  }
}

export default CalculatorApp

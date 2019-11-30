import React, { Component, Fragment } from "react"
import CalculatorIntro from "./calculatorIntro"
import { StepCard } from "./stepCard"
import { AddStep } from "./addStep"

class CalculatorApp extends Component {
  state = {
    name: "",
    hours: "",
    minutes: "",
    steps: [],
  }

  handleInputChange = event => {
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
            id,
            name,
            hours,
            minutes,
          }
        ),
      ],
      name: "",
      hours: "",
      minutes: "",
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

  render() {
    const { name, hours, minutes } = this.state

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
      </Fragment>
    )
  }
}

export default CalculatorApp

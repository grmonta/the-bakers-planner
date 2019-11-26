import React from "react"
import PropTypes from "prop-types"

import styled from "@emotion/styled"
import tw from "tailwind.macro"

const CardContainer = styled.div`
  ${tw` 
    flex flex-wrap  


  `}
`

const ButtonRow = styled.div`
  ${tw` 
    w-full mb-2 inline-flex my-1 

  `}
`
const EditButton = styled.button`
  ${tw` 
    w-1/2 mb-2
bg-white  hover:bg-teal-700 hover:text-white text-teal-700 border border-teal-800 font-semibold py-1 px-2 rounded mr-2 cursor-pointer text-center
  `}
`

const DeleteButton = styled.button`
  ${tw` 
    w-1/2 mb-2
bg-white hover:bg-red-800 hover:text-white text-red-700 border border-red-700 font-semibold py-1 px-2 rounded mr-2 cursor-pointer text-center
  `}
`

const CardContent = styled.div`
  ${tw` 
    w-full flex flex-col

  `}
`

const CardTitle = styled.h4`
  ${tw` 
    text-pink-400

  `}
`

const CardTime = styled.p`
  ${tw` 
    w-full mb-2 inline-flex my-1 

  `}
`

export const StepCard = ({
  toggleEditing,
  step,
  onChange,
  index,
  onDelete,
}) => (
  <CardContainer className="col-md-6 col-lg-3">
    <div className="card mb-3">
      <div className="card-body">
        {step.isEditing ? (
          <div className="mb-4">
            <input
              type="text"
              name="name"
              className="form-control mb-2 mr-sm-2"
              placeholder="Step Name*"
              value={step.name}
              onChange={event => onChange(event, index)}
              required
            />
            <input
              type="number"
              name="hours"
              min="0"
              max="1000"
              placeholder="Hours*"
              value={step.hours}
              onChange={event => onChange(event, index)}
              required
            />
            <input
              type="number"
              name="minutes"
              min="0"
              max="59"
              placeholder="Minutes*"
              value={step.minutes}
              onChange={event => onChange(event, index)}
              required
            />
          </div>
        ) : (
          <CardContent>
            <CardTitle>{step.name}</CardTitle>
            <CardTime>{step.hours} hours</CardTime>
            <CardTime>{step.minutes} minutes</CardTime>
          </CardContent>
        )}

        <div className="row justify-content-center">
          <ButtonRow>
            <EditButton type="button" onClick={toggleEditing}>
              {step.isEditing ? "Save" : "Edit"}
            </EditButton>

            <DeleteButton type="button" onClick={onDelete}>
              Delete
            </DeleteButton>
          </ButtonRow>
        </div>
      </div>
    </div>
  </CardContainer>
)

StepCard.propTypes = {
  step: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired,
    minutes: PropTypes.string.isRequired,
  }),
  toggleEditing: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

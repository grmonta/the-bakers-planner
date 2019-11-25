import React from "react"
import PropTypes from "prop-types"

//TODO 5: Add an onClick attribute to the edit button with the toggleEditing prop as its value.
//TODO 6: Use the isEditing property of the item to toggle between showing Edit or Save as the button text.
//TODO 8: Use the item.isEditing property to show either the input fields or just display the name and price
// TODO of the item within the card body.
//TODO 9: Add the value attribute to the name input element with a value of item.name and
// TODO: the price input element with item.price
//TODO 13: Add onChange to the argument list
//TODO 14: Use an arrow function which accepts an event and  returns the onChange prop as the value to the onChange attribute
// TODO: to both the name and price input elements passing it the event and index.

export const StepCard = ({
  toggleEditing,
  step,
  onChange,
  index,
  onDelete,
}) => (
  <div className="col-md-6 col-lg-3">
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
          <div>
            <h4 className="card-title text-center">{step.name}</h4>
            <h2>
              {step.hours}:{step.minutes}
            </h2>
          </div>
        )}

        <div className="row justify-content-center">
          <div>
            <button type="button" onClick={toggleEditing}>
              {step.isEditing ? "Save" : "Edit"}
            </button>

            <button type="button" onClick={onDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
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

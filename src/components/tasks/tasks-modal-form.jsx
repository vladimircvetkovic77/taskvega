import React from 'react'
import Form from '../abstract/form';
import Joi from "joi-browser";

import config from "../../config/config.json"


export default class TasksModalForm extends Form {

  state = {
    cancelButtonText: 'Cancel',
    data: {
      title: '',
      hours: '',
    },
    errors: {}
  }

  schema = {
    title: Joi.string().min(5).required().label('Task title'),
    hours: Joi.number().integer().min(1).max(config.maxHoursPerDay).required().label('Task duration(in hours)'),
  }

  render() {
    const { visible, onSubmit, onCancel, heading } = this.props;
    const { cancelButtonText } = this.state;
    return (
      <div className={`modal-wrap js-modal ${visible}`} >
        <div className="modal js-modal-inner">
          <h2>{heading}</h2>
          <form>
            {this.renderInput("field-wrap", 'title', 'field', 'Enter title here...', 'Title:', 'label')}
            {this.renderInput("field-wrap", 'hours', 'field', 'Add hours here...', 'Hours:', 'label', null)}
            {this.renderButton('btn-wrap', 'btn', 'right', onSubmit, 'Create')}
            {this.renderButton('btn-wrap', 'btn btn-cancel', 'right', onCancel, cancelButtonText)}
          </form>
        </div>
      </div >
    )
  }
}

import React, { Component } from 'react';
import TasksWrapper from '../components/tasks/tasks-wrapper'
import Joi from 'joi-browser'

class DailyTasks extends Component {

  state = {
    day: '',
    month: '',
    year: '',
  };

  schema = {
    path: Joi.date(),
  };

  validateUrlParamDate = () => {
    const [day, month, year, redundantParams] = this.props.match.params.date.split('-');
    const date = { path: `${month}-${day}-${year}` };
    const result = Joi.validate(date, this.schema)
    if (result.error || redundantParams) return this.props.history.replace('/not-found');
    this.setState({ day, month, year });
  }

  componentDidMount() {
    this.validateUrlParamDate();
  }

  render() {
    return (
      <React.Fragment>
        <TasksWrapper
          date={[this.state.day, this.state.month, this.state.year]}
        />
      </React.Fragment>
    );
  }
}

export default DailyTasks;
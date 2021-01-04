import React, { Component } from 'react';
import TasksHeader from './tasks-header'
import TasksList from './tasks-list'
import TasksModalForm from './tasks-modal-form'
import TasksFooter from './tasks-footer'


class TasksWrapper extends Component {


  state = {
    visible: '',
  }



  handleOpenModal = () => {
    this.setState({ visible: 'is-visible' });
  }

  handleCloseModal = e => {
    e.preventDefault();
    this.setState({ visible: '' });
  }

  render() {
    const { visible } = this.state;
    const { date, tasks, loadingTasks } = this.props;

    return (
      <div className="page-wrap" >
        <TasksHeader
          onClick={this.handleOpenModal}
          date={date}
        />
        <TasksList
          tasks={tasks}
          loading={loadingTasks}
        />
        <TasksModalForm
          heading="Create a task:"
          visible={visible}
          onSubmit={this.handleCloseModal}
          onCancel={this.handleCloseModal}
          loading={loadingTasks}
          tasks={tasks}
          date={date}
        />
        <TasksFooter />
      </div>
    );
  }
}

export default TasksWrapper;

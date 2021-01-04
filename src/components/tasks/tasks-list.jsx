import React from 'react'
import Input from '../common/input'
import { WaveLoading } from 'react-loadingg';
import TasksListItem from './tasks-list-item'

export default function TasksList(props) {
  const { loading, tasks } = props;
  return (
    <div>
      <main className="main">
        <div className="wrap">

          {!loading && tasks.map(task => (
            <TasksListItem
              key={task.id}
              largeLabelTitle="Title"
              smallLabelTitle="Hours"
              text={task.username}
            />
          ))}

          {renderLoader()}

          {!loading && <Input
            wrapperClasses="total align-right"
            label="Total:"
            labelClasses="total-label"
            name="total"
            inputClasses="total-input"
            value="2"
            readOnly="readonly"
          />}

        </div>
      </main>
    </div >
  )

  function renderLoader() {
    return props.loading ? <div style={{ marginTop: '50px' }}><WaveLoading /></div> : null;
  }
}

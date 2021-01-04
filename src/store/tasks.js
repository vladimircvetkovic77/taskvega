import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api'
import config from '../config/config.json'


const slice = createSlice({
  name: 'tasks',
  initialState: {
    list: [],
    error: [],
    loading: false,
    lastFetch: null
  },
  reducers: {
    stopTasksLoading: (tasks, action) => {
      tasks.loading = false;
    },
    tasksRequested: (tasks, action) => {
      tasks.loading = true;
    },
    taskAdded: (tasks, action) => {
      tasks.list.push(action.payload);
    },
    tasksReceived: (tasks, action) => {
      tasks.list = action.payload.data;
    },
    updateError: (tasks, action) => {
      tasks.error = action.payload;
    }
  },
});

export default slice.reducer;


// Action Creators

const { taskAdded, tasksReceived, tasksRequested, stopTasksLoading } = slice.actions;


export const loadTasks = date => {
  return apiCallBegan({
    baseURL: config.apiBaseURL,
    url: `${config.tasksURL}/${date}`,
    onStart: tasksRequested.type,
    onSuccess: tasksReceived.type,
    onEnd: stopTasksLoading.type
  })
}

export const addTask = task => {
  return apiCallBegan({
    baseURL: config.apiBaseURL,
    url: config.tasksURL,
    method: 'post',
    data: task,
    onStart: tasksRequested.type,
    onSuccess: taskAdded.type,
    onEnd: stopTasksLoading.type
  })
}

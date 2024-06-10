import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    tasks: [],
  }),
  actions: {
    addTask(task) {
      this.tasks.push({
        text: task,
        completed: false,
        ready: false,
      });
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    toggleTaskStatus(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    },
    toggleTaskReady(index) {
      this.tasks[index].ready = !this.tasks[index].ready;
    },
  },
  getters: {
    totalTasksCount: (state) => state.tasks.length,
    incompleteTasksCount: (state) => {
      return state.tasks.filter(task => !task.completed).length;
    },
    completedTasksCount: (state) => {
      return state.tasks.filter(task => task.completed).length;
    },
    readyTasksCount: (state) => {
      return state.tasks.filter(task => task.ready).length;
    },
  },
});
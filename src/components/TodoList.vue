<template>
  <div class="todo-list">
    <h1>Todo List</h1>
    <div class="input-container">
      <input v-model="newTodo" placeholder="Add a new task" @keyup.enter="addTodo" />
      <button @click="addTodo">Add</button>
    </div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <span :class="{ completed: todo.completed }" @click="toggleTodoCompletion(index)">
          {{ todo.text }}
        </span>
        <button class="delete" @click="deleteTodo(index)">Delete</button>
      </li>
    </ul>
    <p>{{ incompleteTodos }} tasks remaining</p>
  </div>
</template>

<script>
import { useTodoStore } from '../stores/taskStore';
import { computed, ref } from 'vue';

export default {
  setup() {
    const store = useTodoStore();
    const newTodo = ref('');

    const addTodo = () => {
      if (newTodo.value.trim()) {
        store.addTask(newTodo.value);
        newTodo.value = '';
      }
    };

    const deleteTodo = (index) => {
      store.removeTask(index);
    };

    const toggleTodoCompletion = (index) => {
      store.toggleTaskStatus(index);
    };

    return {
      newTodo,
      todos: computed(() => store.tasks),
      addTodo,
      deleteTodo,
      toggleTodoCompletion,
      incompleteTodos: computed(() => store.incompleteTasksCount),
    };
  },
};
</script>

<style scoped>
.todo-list {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.input-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

input {
  flex-grow: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input:focus {
  border-color: #28a745;
  outline: none;
  box-shadow: 0 0 5px rgba(40, 167, 69, 0.5);
}

button {
  padding: 10px 20px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
  background-color: #218838;
  transform: translateY(-2px);
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
  transition: background-color 0.3s ease;
}

li:hover {
  background-color: #f9f9f9;
}

li.completed span {
  text-decoration: line-through;
  color: #888;
}

button.delete {
  background-color: transparent;
  border: none;
  color: #dc3545;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
}

button.delete:hover {
  color: #c82333;
  transform: rotate(10deg);
}

p {
  text-align: center;
  color: #666;
  margin-top: 20px;
  font-size: 1.2em;
}
</style>

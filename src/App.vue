<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoList
  }
};
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  background: linear-gradient(to right, rgba(106, 17, 203, 0.5), rgba(37, 117, 252, 0.5));
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #333;
}

#app {
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Style for the heading */
#app h1 {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #4a4a4a;
  animation: bounceIn 1.5s ease-in-out;
}

@keyframes bounceIn {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-30px); }
  60% { transform: translateY(-15px); }
}

/* Style for the todo list container */
.todo-list {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.todo-list:hover {
  transform: scale(1.02);
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
  border-bottom: 1px solid #ccc;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

li:hover {
  background-color: #e9ecef;
  transform: scale(1.05);
}

li.completed span {
  text-decoration: line-through;
  color: #888;
  transition: color 0.3s ease;
}

li.completed:hover span {
  color: #555;
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
  transform: rotate(15deg);
}

p {
  text-align: center;
  color: #666;
  margin-top: 20px;
  font-size: 1.2em;
  animation: fadeIn 1s ease-in-out 1.5s;
  animation-fill-mode: backwards;
}
</style>

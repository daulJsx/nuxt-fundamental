<script setup lang="ts">
const { todoList, addTodo } = useTodo();

const addTodoList = () => {
  addTodo({ id: 1, todo: "First Todo" });
  console.log("Successfully added new todo: ", todoList.value);
};
</script>

<template>
  <button @click="addTodoList">Add Todo</button>
</template>

<style scoped></style>

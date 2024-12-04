export default function useTodo () {
    const todoList = ref([])

    const addTodo = (payload) => {
      todoList.value = [...todoList.value, payload]
    }

    return{
      todoList, addTodo
    }
 }

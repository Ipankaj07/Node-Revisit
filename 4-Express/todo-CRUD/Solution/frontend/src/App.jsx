import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "http://localhost:8080";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(`${url}/`).then((res) => {
      setTodos(res.data);
    });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      title: e.target.title.value,
    };
    axios.post(`${url}/`, newTodo).then((res) => {
      setTodos([...todos, res.data]);
    });

    e.target.title.value = "";
  };

  const updateTodo = (id) => {
    let todo = todos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    axios.put(`${url}/${id}`, todo).then((res) => {
      setTodos(todos.map((todo) => (todo.id === id ? res.data : todo)));
    });
  };

  const deleteTodo = (id) => {
    axios.delete(`${url}/${id}`).then((res) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    });
  };

  return (
    <div>
      <div className="min-h-screen h-full bg-gradient-to-b from-gray-900 to-slate-800 flex flex-col text-white py-8">
        <h2 className="text-2xl font-bold text-center mt-4">Todo List</h2>
        <form onSubmit={addTodo} className="flex justify-center mt-4">
          <input
            type="text"
            name="title"
            placeholder="Add Todo"
            className="border-2 border-gray-800 rounded-md p-2 bg-gray-800 text-white"
          />
          <button
            type="submit"
            className="bg-gray-800 text-white rounded-md p-2 ml-2 hover:bg-gray-700"
          >
            Add
          </button>
        </form>
        <div className="flex flex-col justify-center items-center mt-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between items-center w-1/2 bg-gray-800 rounded-md p-2 mt-2"
            >
              <div className="w-full flex justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => updateTodo(todo.id)}
                  />
                  <p className={`ml-2 ${todo.completed ? "line-through" : ""}`}>
                    {todo.title}
                  </p>
                </div>
                <div>
                  <button
                    className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-400"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

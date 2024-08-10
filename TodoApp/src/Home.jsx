import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from "react-icons/bs";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    axios
      .put("http://localhost:3001/update/" + id)
      .then((result) => {
        setTodos(todos.map(todo =>
          todo._id === id ? { ...todo, done: !todo.done } : todo
        ));
      })
      .catch((err) => console.log(err));
  };
  
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/delete/" + id)
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Todo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div className="text-center mt-6">
          <h2 className="text-xl font-medium">No Record</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-center justify-between" key={todo._id}>
            <div className="flex items-center">
              <div 
                className={`w-6 h-6 flex items-center justify-center rounded-full cursor-pointer ${todo.done ? 'text-green-500' : 'text-gray-500'}`}
                onClick={() => handleEdit(todo._id)}
              >
                {todo.done ? (
                  <BsFillCheckCircleFill className="text-2xl" />
                ) : (
                  <BsCircleFill className="text-2xl" />
                )}
              </div>
              <p className={`ml-3 text-lg ${todo.done ? 'line-through text-gray-500' : ''}`}>{todo.task}</p>
            </div>
            <div className="flex flex-col ml-4">
              <small className="text-sm text-gray-600"><strong>Priority:</strong> {todo.priority}</small>
              <small className="text-sm text-gray-600"><strong>Category:</strong> {todo.category}</small>
              <small className="text-sm text-gray-600"><strong>Due Date:</strong> {new Date(todo.date).toLocaleDateString()} {new Date(todo.date).toLocaleTimeString()}</small>
              <small className="text-sm text-gray-600"><strong>Note:</strong> {todo.note}</small>
            </div>
            <div className="ml-4">
              <BsFillTrashFill
                className="text-red-500 cursor-pointer hover:text-red-700 transition-colors"
                onClick={() => handleDelete(todo._id)}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import axios from "axios";

function Create() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Academics");

  const handleAdd = () => {
    const dateTime = `${date}T${time}`;
    axios
      .post("https://todoapp-2-m2b5.onrender.com/add", {
        task: task,
        date: dateTime,
        note: note,
        priority: priority,
        category: category,
      })
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 className="text-xl font-semibold mb-4">Add New Task</h3>
      <input
        type="text"
        placeholder="Enter Task"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        onChange={(e) => setTask(e.target.value)}
      />
      <div className="flex gap-4 mb-4">
        <input
          type="date"
          className="w-full p-2 border border-gray-300 rounded-md"
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          className="w-full p-2 border border-gray-300 rounded-md"
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <textarea
        placeholder="Enter Note"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        onChange={(e) => setNote(e.target.value)}
      ></textarea>
      <div className="flex gap-4 mb-4">
        <select
          onChange={(e) => setPriority(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="High">High</option>
          <option value="Medium" selected>
            Medium
          </option>
          <option value="Low">Low</option>
        </select>
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="Academics" selected>
            Academics
          </option>
          <option value="Workout">Workout</option>
          <option value="Chores">Chores</option>
          <option value="Shopping">Shopping</option>
          <option value="Work">Work</option>
          <option value="Health">Health</option>
          <option value="Finance">Finance</option>
          <option value="Leisure">Leisure</option>
          <option value="Travel">Travel</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button
        type="submit"
        onClick={handleAdd}
        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
      >
        Add
      </button>
    </div>
  );
}

export default Create;

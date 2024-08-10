import React, { useState } from "react";
import axios from "axios";

function Create() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Academics");

  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", {
        task: task,
        date: date,
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
    <div className="create_form">
      <input
        type="text"
        placeholder="Enter Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="date"
        placeholder="Enter Date"
        onChange={(e) => setDate(e.target.value)}
      />
      <textarea
        placeholder="Enter Note"
        onChange={(e) => setNote(e.target.value)}
      ></textarea>
      <select onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium" selected>
          Medium
        </option>
        <option value="Low">Low</option>
      </select>
      <select onChange={(e) => setCategory(e.target.value)}>
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
      <button type="submit" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default Create;

import React, { useState } from "react";
import axios from "axios";

function Create() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Other"); // Default category

  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task, priority: priority, category: category })
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
      <select onChange={(e) => setPriority(e.target.value)} value={priority}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="Academics">Academics</option>
        <option value="Workout">Workout</option>
        <option value="Shopping">Shopping</option>
        <option value="Work">Work</option>
        <option value="Health">Health</option>
        <option value="Hobbies">Hobbies</option>
        <option value="Household">Household</option>
        <option value="Finance">Finance</option>
        <option value="Social">Social</option>
        <option value="Personal Development">Personal Development</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit" onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Create;

import React, { useState } from "react";
import axios from "axios";

function Create() {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium"); // Default priority

  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task, priority: priority })
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
      <button type="submit" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default Create;

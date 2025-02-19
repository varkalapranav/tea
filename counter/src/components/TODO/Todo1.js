import React, { useState } from "react";

import "./Todo.css";

const Todo1 = () => {
  const [formData, setFormData] = useState({
    task: "",
  });

  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [display, setDisplay] = useState([]);

  const handlesubmit = (e) => {
    e.preventDefault();
    if (formData.task == "") {
      alert("You are not supposed to enter the empty task!!");
      return;
    }

    if (editIndex !== null) {
      const updatedTasks = [...display];
      updatedTasks[editIndex] = formData.task;
      setDisplay(updatedTasks);
      setEditIndex(null);
    } else {
      setDisplay((prev) => [...prev, formData.task]);
    }

    setFormData({ task: "" });
  };
  const handleedit = (index) => {
    setFormData({ task: display[index] });
    setEditIndex(index);
  };

  const handledelete = (index) => {
    setDisplay((prev) => prev.filter((item, i) => index != i));
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          name="task"
          value={formData.task}
          onChange={handleChange}
        />
        <button type="submit"> Submit</button>
      </form>

      <div>
        {display.map((item, index) => {
          return (
            <>
              <div className="list">
                <li key={index}>{item}</li>
                <button onClick={() => handleedit(index)}>Edit</button>

                <button onClick={() => handledelete(index)}>Delete</button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Todo1;

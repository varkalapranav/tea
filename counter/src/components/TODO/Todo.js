import React, { useState } from "react";

const Todo = () => {
  const [formData, setFormData] = useState({
    task: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [display, setDisplay] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.task == "") {
      alert("please enter the task");
      return;
    }
    setDisplay((prev) => [...prev, formData.task]);
    setFormData({ task: "" });
  };

  const handleDelete = (index) => {
    setDisplay((prev) => prev.filter((item, i) => index !== i));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            name="task"
            value={formData.task}
            onChange={handleChange}
            style={{
              width: "300px", // ✅ Set width
              height: "50px", // ✅ Set height
              padding: "10px", // ✅ Add padding for visibility
              fontSize: "16px", // ✅ Improve readability
            }}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      <div>
        {display.map((item, index) => {
          return (
            <>
              <div className="List">
                <li key={index}>{item}</li>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;

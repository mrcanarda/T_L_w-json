import { useState } from "react";
function TaskCreate({ onCreate, task }) {
  const [title, setTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTaskChange = (e) => {
    setTaskDesc(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title, taskDesc);
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div className="task-create">
      <h3>Please Add a Text</h3>
      <form className="task-form">
        <label className="task-label">Header</label>
        <input value={title} onChange={handleChange} className="task-input" />
        <label className="task-label">Add To Text</label>
        <textarea
          value={taskDesc}
          onChange={handleTaskChange}
          className="task-input"
          rows={5}
        />
        <button className="task-button" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}

export default TaskCreate;

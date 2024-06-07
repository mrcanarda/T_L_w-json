function TaskShow({ task }) {
  return (
    <div className="task-body task-show">
      <h3 className="task-title">Your Mission</h3>
      <p>{task.title}</p>
      <h3 className="task-title">Your Doing Job</h3>
      <p>{task.taskDesc}</p>
      <div>
        <button className="task-delete">Delete</button>
        <button className="task-edit">Edit</button>
      </div>
    </div>
  );
}

export default TaskShow;

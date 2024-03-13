import { useState } from "react";
import Tasks from "./Tasks";
import { v4 as uuidv4 } from "uuid";

export default function DisplayProjectInfo({
  project,
  handleDelete,
  handleTaskDelete,
}) {
  const [taskInputValue, setTaskInputValue] = useState("");

  const selectedDate = new Date(project.date);
  const formattedDate = selectedDate.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  const handleChange = (evt) => {
    setTaskInputValue(evt.target.value);
  };

  const handleSubmitTask = (evt) => {
    evt.preventDefault();
    project.tasks.push({ taskName: taskInputValue, taskId: uuidv4() });
    setTaskInputValue("");
  };

  return (
    <div className="text-left ml-20 text-lg w-3/5 mb-96">
      <div className="flex justify-between mb-3">
        <p className=" text-4xl font-bold text-stone-700">{project.title}</p>
        <button
          className="py-2 rounded-lg px-6 mr-5 text-stone-700 hover:bg-stone-200 hover:transition font-medium	"
          onClick={() => handleDelete(project)}
        >
          Delete
        </button>
      </div>

      <p className="text-stone-400 mb-3 ">{formattedDate}</p>
      <p className="text-stone-600 text-lg font-medium mb-3">
        {project.description}
      </p>
      <hr className="bg-stone-300" style={{ height: "3px" }} />
      <p className=" font-bold text-stone-800 text-2xl my-3">Tasks</p>
      <form className="flex flex-row mb-5" onSubmit={handleSubmitTask}>
        <input
          type="text"
          className="outline-none my-2 bg-stone-200 py-1  px-3  rounded-sm mr-5"
          required
          value={taskInputValue}
          onChange={handleChange}
        />
        <button className=" font-medium rounded-lg px-4 text-stone-700 hover:bg-stone-200 hover:transition">
          Add Task
        </button>
      </form>
      <Tasks project={project} handleTaskDelete={handleTaskDelete} />
    </div>
  );
}

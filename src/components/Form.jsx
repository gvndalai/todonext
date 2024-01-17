import React, { useContext, useState } from "react";
import { dataArrayContext } from "./context/arrayContext";
import { Error } from "./Error";

export const Form = () => {
  const [open, setOpen] = useState(false);
  const { dataArray, addTask } = useContext(dataArrayContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setOpen(false);
      setError(true);
    } else if (!description.trim()) {
      setOpen(false);
      setError(true);
    } else if (!status.trim()) {
      setOpen(false);
      setError(true);
    } else if (!priority.trim()) {
      setOpen(false);
      setError(true);
    } else {
      setError(false);
      const newTask = {
        id: Math.floor(Math.random() * 10000),
        title: title,
        description: description,
        status: status,
        priority: priority,
      };
      console.log(newTask);
      addTask(newTask);
      setTitle("");
      setDescription("");
      setStatus("");
      setPriority("");
    }
  };
  return (
    <div
      className={`Backdrop fixed top-0 w-screen h-screen  flex items-center ${
        open && "hidden"
      }`}
    >
      <div className="w-screen h-screen bg-black opacity-55"></div>
      <div
        className="Add-task-pop-up flex justify-center items-center w-screen h-screen absolute"
        onClick={() => open && setOpen(false)}
      >
        <form
          className="bg-white w-[400px] p-4 rounded-[8px] flex flex-col gap-[8px]"
          onSubmit={handleSubmit}
        >
          <h1 className="text-[32px] font-bold">Add Task</h1>
          <div id="New-task-title" className="flex flex-col">
            Title
            <input
              type="text"
              id="New-task-title-input"
              className="border border-solid border-black rounded-[8px] min-h-[50px] pb-[40px] p-[4px]"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div id="New-task-description" className="flex flex-col">
            Description
            <input
              type="text"
              id="New-task-description-input"
              className="border border-solid border-black rounded-[8px] min-h-[100px] pb-[80px] p-[4px]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div id="Status-input-title" className="flex flex-col">
            Status
            <select
              name="Status"
              id="Status-select"
              className="border border-solid border-black rounded-[4px]"
              aria-placeholder="Choose a status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option className="hidden opacity-50"></option>
              <option value="Todo">To do</option>
              <option value="In-progress">In progress</option>
              <option value="Stuck">Stuck</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <div id="Add-task-Priority-title" className="flex flex-col">
            Priority
            <select
              name="Priority"
              id="Add-Task-Priority-input"
              className="border border-solid border-black rounded-[4px]"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option className="hidden"></option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          {error && <Error onClose={() => setError(false)} />}
          <button
            id="Adding-task-button"
            type="submit"
            href="/"
            className="border border-solid border-black rounded-[4px] text-white bg-black text-center hover:bg-white hover:text-black"
            onClick={() => {
              setOpen(true);
            }}
          >
            Add task
          </button>
        </form>
      </div>
    </div>
  );
};

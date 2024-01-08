import React from "react";
// import Link from "next/link";
export const Form = () => {
  // const [titleInput, setTitleInput] = useState("");
  // const [descinput, setDescInput] = useState("");
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // setDescInput("");
  // };
  return (
    <div className="Backdrop relative w-screen h-screen">
      <div className="w-screen h-screen bg-black absolute opacity-55"></div>
      <div class="Add-task-pop-up flex justify-center items-center w-screen h-screen absolute">
        <form className="bg-white w-[400px] p-4 rounded-[8px] flex flex-col gap-[8px]">
          <h1 className="text-[32px] font-bold">Add Task</h1>
          <div id="New-task-title" className="flex flex-col">
            Title
            <input
              type="text"
              id="New-task-title-input"
              className="border border-solid border-black rounded-[8px] min-h-[50px] pb-[40px] p-[4px]"
            />
          </div>
          <div id="New-task-description" className="flex flex-col">
            Description
            <input
              type="text"
              id="New-task-description-input"
              className="border border-solid border-black rounded-[8px] min-h-[100px] pb-[80px] p-[4px]"
              // value={descinput}
            />
          </div>
          <div id="Status-input-title" className="flex flex-col">
            Status
            <select
              name="Status"
              id="Status-select"
              className="border border-solid border-black rounded-[4px]"
              aria-placeholder="Choose a status"
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
            >
              <option className="hidden"></option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div
            id="Adding-task-button"
            href="/"
            className="border border-solid border-black rounded-[4px] text-white bg-black text-center"
            // onClick={handleSubmit}
          >
            Add task
          </div>
        </form>
      </div>
    </div>
  );
};

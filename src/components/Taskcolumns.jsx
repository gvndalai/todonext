import React, { useState } from "react";
import { useContext } from "react";
import { dataArrayContext } from "./context/arrayContext";
import { Form } from "./Form";
export const Taskcolumns = () => {
  const [open, setOpen] = useState(false);

  const { dataArray, removeTask } = useContext(dataArrayContext);

  // const remove = (taskId) => {
  //   taskId.target();
  // };
  // const doneTask = (taskStatus) => {
  //   makingDoneTask(taskStatus);
  // };

  return (
    <>
      <div className="flex gap-[16px] Kanban">
        <div className="task-board gap-[8px]">
          <div className="task-board-header p-2 flex text-[20px] items-center font-semibold mb-2">
            To do <span className="count" id="todo-count"></span>
          </div>
          <div className="task-card" id="todo">
            {dataArray
              .filter((el) => el.status === "Todo")
              .map((task) => (
                <div
                  key={task.id}
                  className="card cursor-grab bg-white p-2 flex gap-[12px] "
                  draggable="true"
                >
                  <div
                    className="done w-[24px]"
                    onClick={() => doneTask(task.status)}
                  >
                    <i className="fas fa-check" aria-hidden="true"></i>
                  </div>
                  <div className="details flex flex-col max-w-[206px]">
                    <h4>{task.title}</h4>
                    <p>{task.description}</p>
                    <div className="priority">{task.priority}</div>
                  </div>
                  <div className="actions w-[24px]">
                    <div className="done" onClick={() => remove(task.id)}>
                      <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                    </div>
                    <div className="done" onClick={() => edit(task.id)}>
                      <i
                        className="fa-solid fa-pen-to-square"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div
            className="add-button flex items-center cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <i className="fa-solid fa-plus"></i>
            <div>Add card</div>
          </div>
        </div>
        <div className="task-board">
          <div className="task-board-header p-2 flex text-[20px] items-center font-semibold mb-2">
            In progress<span className="count" id="inprogress-count"></span>
          </div>
          <div className="task-card" id="stuck">
            {dataArray
              .filter((el) => el.status === "In-progress")
              .map((task) => (
                <div
                  key={task.id}
                  className="card cursor-grab bg-white p-2 flex gap-[12px] "
                  draggable="true"
                >
                  <div className="done w-[24px]">
                    <i className="fas fa-check" aria-hidden="true"></i>
                  </div>
                  <div className="details flex flex-col max-w-[206px]">
                    <h4>{task.title}</h4>
                    <p>{task.description}</p>
                    <div className="priority">{task.priority}</div>
                  </div>
                  <div className="actions w-[24px]">
                    <div className="done" onClick={() => remove(task.id)}>
                      <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                    </div>
                    <div className="done" onClick={() => edit(task.id)}>
                      <i
                        className="fa-solid fa-pen-to-square"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div
            className="add-button flex items-center cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <i className="fa-solid fa-plus"></i>
            <div>Add card</div>
          </div>
        </div>
        <div className="task-board">
          <div className="task-board-header p-2 flex text-[20px] items-center font-semibold mb-2">
            Stuck <span className="count" id="stuck-count"></span>
          </div>
          <div className="task-card" id="stuck">
            {dataArray
              .filter((el) => el.status === "Stuck")
              .map((task) => (
                <div
                  key={task.id}
                  className="card cursor-grab bg-white p-2 flex gap-[12px] "
                  draggable="true"
                >
                  <div className="done w-[24px]">
                    <i className="fas fa-check" aria-hidden="true"></i>
                  </div>
                  <div className="details flex flex-col max-w-[206px]">
                    <h4>{task.title}</h4>
                    <p>{task.description}</p>
                    <div className="priority">{task.priority}</div>
                  </div>
                  <div className="actions w-[24px]">
                    <div className="done" onClick={() => remove(task.id)}>
                      <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                    </div>
                    <div className="done" onClick={() => edit(task.id)}>
                      <i
                        className="fa-solid fa-pen-to-square"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div
            className="add-button flex items-center cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <i className="fa-solid fa-plus"></i>
            <div>Add card</div>
          </div>
        </div>
        <div className="task-board">
          <div className="task-board-header p-2 flex text-[20px] items-center font-semibold mb-2">
            Done <span className="count" id="done-count"></span>
          </div>
          <div className="task-card" id="done">
            {dataArray
              .filter((el) => el.status === "Done")
              .map((task) => (
                <div
                  key={task.id}
                  className="card cursor-grab bg-white p-2 flex gap-[12px] "
                  draggable="true"
                >
                  <div className="done w-[24px]">
                    <i className="fas fa-check" aria-hidden="true"></i>
                  </div>
                  <div className="details flex flex-col max-w-[206px]">
                    <h4>{task.title}</h4>
                    <p>{task.description}</p>
                    <div className="priority">{task.priority}</div>
                  </div>
                  <div className="actions w-[24px]">
                    <div className="done" onClick={() => remove(task.id)}>
                      <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                    </div>
                    <div className="done" onClick={() => edit(task.id)}>
                      <i
                        className="fa-solid fa-pen-to-square"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div
            className="add-button flex items-center cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <i className="fa-solid fa-plus"></i>
            <div>Add card</div>
          </div>
        </div>
      </div>
      {open && <Form onClose={() => setOpen(false)} />}
    </>
  );
};

import React, { useState } from "react";
import { useContext } from "react";
import { dataArrayContext } from "./context/arrayContext";
import { Form } from "./Form";
export const Taskcolumns = () => {
  const [open, setOpen] = useState(false);
  const { dataArray } = useContext(dataArrayContext);

  return (
    <>
      <div className="flex gap-[16px] Kanban">
        <div className="task-board gap-[8px]">
          <div class="task-board-header p-2 flex text-[20px] items-center font-semibold mb-2">
            To do <span class="count" id="todo-count"></span>
          </div>
          <div class="task-card" id="todo">
            {dataArray
              .filter((el) => el.status === "Todo")
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
            onClick={() => setOpen(true)}
          >
            <i class="fa-solid fa-plus"></i>
            <div>Add card</div>
          </div>
        </div>
        <div className="task-board">
          <div class="task-board-header p-2 flex text-[20px] items-center font-semibold mb-2">
            In progress<span class="count" id="inprogress-count"></span>
          </div>
          <div class="task-card" id="stuck">
            <div class="card" draggable="true"></div>
          </div>
          <div
            className="add-button flex items-center cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <i class="fa-solid fa-plus"></i>
            <div>Add card</div>
          </div>
        </div>
        <div className="task-board">
          <div class="task-board-header p-2 flex text-[20px] items-center font-semibold mb-2">
            Stuck <span class="count" id="stuck-count"></span>
          </div>
          <div class="task-card" id="stuck">
            <div class="card" draggable="true"></div>
          </div>
          <div
            className="add-button flex items-center cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <i class="fa-solid fa-plus"></i>
            <div>Add card</div>
          </div>
        </div>
        <div className="task-board">
          <div class="task-board-header p-2 flex text-[20px] items-center font-semibold mb-2">
            Done <span class="count" id="done-count"></span>
          </div>
          <div class="task-card" id="done">
            <div class="card" draggable="true"></div>
          </div>
          <div
            className="add-button flex items-center cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <i class="fa-solid fa-plus"></i>
            <div>Add card</div>
          </div>
        </div>
      </div>
      {open && <Form />}
    </>
  );
};

import React, { useState } from "react";
import { useContext } from "react";
import { dataArrayContext } from "./context/arrayContext";
import { Form } from "./Form";
import Head from "next/head";
export const Taskcolumns = () => {
  const [open, setOpen] = useState(false);
  const { dataArray, setDataArray } = useContext(dataArrayContext);
  // const [dataArray, setDataArray] = useState([]);
  const countTasksByStatus = (status) => {
    return dataArray.filter((el) => el.status === status).length;
  };

  const todoCount = countTasksByStatus("Todo");
  const inProgressCount = countTasksByStatus("In-progress");
  const stuckCount = countTasksByStatus("Stuck");
  const doneCount = countTasksByStatus("Done");

  const remove = (taskId) => {
    const updatedArray = dataArray.filter((task) => task.id !== taskId);

    setDataArray(updatedArray);
  };

  const doneTask = (taskId) => {
    const taskToUpdate = dataArray.find((task) => task.id === taskId);

    if (taskToUpdate) {
      taskToUpdate.status = "Done";

      setDataArray([...dataArray]);
    }
  };

  return (
    <>
      <Head></Head>
      <div className="flex gap-[16px] Kanban">
        <div className="task-board gap-[8px]">
          <div className="task-board-header p-2 flex text-[20px] items-center font-semibold mb-2 gap-[8px]">
            To do{" "}
            <span className="count" id="todo-count">
              {todoCount}
            </span>
          </div>
          <div className="task-card flex flex-col gap-[8px]" id="todo">
            {dataArray
              .filter((el) => el.status === "Todo")
              .map((task) => (
                <div
                  key={task.id}
                  className="card cursor-grab bg-white p-2 mb-2 flex gap-[12px] rounded-[4px] "
                  draggable="true"
                >
                  <div
                    className="done px-[4px] hover:bg-gray-200"
                    onClick={() => doneTask(task.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="14"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                  </div>
                  <div className="details flex flex-col w-full ">
                    <h4>{task.title}</h4>
                    <p>{task.description}</p>
                    <div className="priority ">{task.priority}</div>
                  </div>
                  <div className="actions w-[24px]">
                    <div
                      className="done hover:bg-gray-200"
                      onClick={() => remove(task.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="12"
                        viewBox="0 0 384 512"
                      >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                      </svg>
                    </div>
                    <div
                      className="done hover:bg-gray-200 "
                      onClick={() => edit(task.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="16"
                        viewBox="0 0 512 512"
                      >
                        <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div
            className="add-button flex items-center cursor-pointer  hover:bg-gray-300 rounded-[4px]"
            onClick={() => setOpen(!open)}
          >
            <i className="fa-solid fa-plus"></i>
            <div>Add card</div>
          </div>
        </div>
        <div className="task-board">
          <div className="task-board-header p-2 flex text-[20px] items-center font-semibold mb-2 gap-[8px]">
            In progress
            <span className="count" id="inprogress-count">
              {inProgressCount}
            </span>
          </div>
          <div className="task-card" id="stuck">
            {dataArray
              .filter((el) => el.status === "In-progress")
              .map((task) => (
                <div
                  key={task.id}
                  className="card cursor-grab bg-white p-2 mb-2 flex gap-[12px] rounded-[4px] "
                  draggable="true"
                >
                  <div
                    className="done px-[4px] hover:bg-gray-200"
                    onClick={() => doneTask(task.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="14"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                  </div>
                  <div className="details flex flex-col w-full ">
                    <h4>{task.title}</h4>
                    <p>{task.description}</p>
                    <div className="priority">{task.priority}</div>
                  </div>
                  <div className="actions w-[24px]">
                    <div
                      className="done hover:bg-gray-200"
                      onClick={() => remove(task.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="12"
                        viewBox="0 0 384 512"
                      >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                      </svg>
                    </div>
                    <div
                      className="done hover:bg-gray-200 "
                      onClick={() => doneTask(task.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="16"
                        viewBox="0 0 512 512"
                      >
                        <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div
            className="add-button flex items-center cursor-pointer hover:bg-gray-300 rounded-[4px]"
            onClick={() => setOpen(!open)}
          >
            <i className="fa-solid fa-plus"></i>
            <div>Add card</div>
          </div>
        </div>
        <div className="task-board">
          <div className="task-board-header p-2 flex text-[20px] items-center font-semibold mb-2 gap-[8px]">
            Stuck{" "}
            <span className="count" id="stuck-count">
              {stuckCount}
            </span>
          </div>
          <div className="task-card" id="stuck">
            {dataArray
              .filter((el) => el.status === "Stuck")
              .map((task) => (
                <div
                  key={task.id}
                  className="card cursor-grab bg-white p-2 mb-2 flex gap-[12px] rounded-[4px] "
                  draggable="true"
                >
                  <div
                    className="done px-[4px] hover:bg-gray-200"
                    onClick={() => doneTask(task.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="14"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                  </div>
                  <div className="details flex flex-col w-full ">
                    <h4>{task.title}</h4>
                    <p>{task.description}</p>
                    <div className="priority">{task.priority}</div>
                  </div>
                  <div className="actions w-[24px]">
                    <div
                      className="done hover:bg-gray-200"
                      onClick={() => remove(task.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="12"
                        viewBox="0 0 384 512"
                      >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                      </svg>
                    </div>
                    <div
                      className="done hover:bg-gray-200 "
                      onClick={() => edit(task.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="16"
                        viewBox="0 0 512 512"
                      >
                        <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div
            className="add-button flex items-center cursor-pointer hover:bg-gray-300 rounded-[4px]"
            onClick={() => setOpen(!open)}
          >
            <i className="fa-solid fa-plus"></i>
            <div>Add card</div>
          </div>
        </div>
        <div className="task-board">
          <div className="task-board-header p-2 flex text-[20px] items-center font-semibold mb-2 gap-[8px]">
            Done{" "}
            <span className="count" id="done-count">
              {doneCount}
            </span>
          </div>
          <div className="task-card" id="done">
            {dataArray
              .filter((el) => el.status === "Done")
              .map((task) => (
                <div
                  key={task.id}
                  className="card cursor-grab bg-white p-2 mb-2 flex gap-[12px] rounded-[4px] "
                  draggable="true"
                >
                  <div
                    className="done px-[4px] hover:bg-gray-200"
                    onClick={() => doneTask(task.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="14"
                      viewBox="0 0 448 512"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                  </div>
                  <div className="details flex flex-col w-full ">
                    <h4>{task.title}</h4>
                    <p>{task.description}</p>
                    <div className="priority">{task.priority}</div>
                  </div>
                  <div className="actions w-[24px]">
                    <div
                      className="done hover:bg-gray-200"
                      onClick={() => remove(task.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="12"
                        viewBox="0 0 384 512"
                      >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                      </svg>
                    </div>
                    <div
                      className="done hover:bg-gray-200 "
                      onClick={() => edit(task.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="16"
                        viewBox="0 0 512 512"
                      >
                        <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div
            className="add-button flex items-center cursor-pointer hover:bg-gray-300 rounded-[4px]"
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

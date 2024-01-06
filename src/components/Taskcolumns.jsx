export const Taskcolumns = () => (
  <>
    <div className="flex gap-[16px] Kanban">
      <div className="task-board gap-[8px]">
        <div class="task-board-header p-2 flex text-[20px] items-center font-semibold mb-2">
          To do <span class="count" id="todo-count"></span>
        </div>
        <div class="task-card" id="todo">
          <div class="card" draggable="true"></div>
        </div>
        <div className="add-button flex items-center">
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
        <div className="add-button flex items-center">
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
        <div className="add-button flex items-center">
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
        <div className="add-button flex items-center">
          <i class="fa-solid fa-plus"></i>
          <div>Add card</div>
        </div>
      </div>
    </div>
  </>
);

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatus } from "./taskSlice";

const Tasks = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      {tasks.tasks.map((task) => (
        <div key={task.date}>
          <h2>{task.date}</h2>
          <ul>
            {task.tasks.map((todoTask) => (
              <li key={todoTask.taskId}>
                {`${todoTask.description} `}
                <button onClick={() => dispatch(toggleStatus(todoTask.taskId))}>
                  {todoTask.status}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Tasks;

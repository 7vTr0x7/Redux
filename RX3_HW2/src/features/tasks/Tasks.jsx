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
            {task.tasks.map((task) => (
              <>
                <li key={task.taskId}>
                  {`${task.description} `}
                  <button onClick={() => dispatch(toggleStatus(task.taskId))}>
                    {task.status}
                  </button>
                </li>
              </>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Tasks;

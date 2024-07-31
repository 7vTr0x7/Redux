import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks, toggleStatus } from "./taskSlice";

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const status = useSelector((state) => state.status);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <div>
      {status === "Loading" && <p>{status}</p>}
      {error && <p>{error}</p>}
      {tasks &&
        tasks.tasks.map((task) => (
          <div key={task.date}>
            <h2>{task.date}</h2>
            <ul>
              {task.tasks.map((todoTask) => (
                <p key={todoTask.taskId}>
                  <li>
                    {`${todoTask.task} `}
                    <button
                      onClick={() => dispatch(toggleStatus(todoTask.taskId))}>
                      {todoTask.taskStatus}
                    </button>
                  </li>
                </p>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Tasks;

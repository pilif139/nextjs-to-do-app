"use client";

import deleteTask from "@/actions/deleteTask";
import { useState } from "react";
import type { Task } from "@prisma/client";
import editTask from "@/actions/editTask";

type Props = {
  task: Task;
};

export default function Task({ task }: Props) {
  const [time, setTime] = useState<string>(
    task.createdAt.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
  );
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [updatedTask, setUpdatedTask] = useState<string>("");

  const handleTimeClick = () => {

  };

  return (
    <li className="flex items-center justify-between bg-gray-500 text-white font-medium text-xl min-w-[50rem] m-2 rounded-2xl shadow-xl p-3 hover:bg-gray-600 transition">
      <div>
        {isUpdating ? (
          <input
            type="text"
            placeholder="Edit task..."
            value={updatedTask}
            onChange={(e) => setUpdatedTask(e.target.value)}
            className="bg-gray-200 text-black font-medium text-xl m-2 px-2 rounded-lg shadow-xl hover:bg-gray-300 transition"
          />
        ) : (
          <>
            <span>{task.title} - &nbsp;</span>
            <button
              className="text-slate-200 font-light text-md hover:font-bold hover:cursor-pointer transition-all"
              onClick={handleTimeClick}
            >
              {time}
            </button>
          </>
        )}
      </div>
      <div>
        {
          isUpdating ? (
            <button
              className="bg-blue-600 p-2 rounded-xl hover:bg-blue-700 transition mx-3"
              onClick={() => {
                setIsUpdating(false);
                if (updatedTask === "") return;
                editTask(task.id, updatedTask);
                setTime(new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                }));
              }}
            >
              Save
            </button>
          ) : (
            <button
              className="bg-green-600 p-2 rounded-xl hover:bg-green-700 transition mx-3"
              onClick={() => setIsUpdating(true)}
            >
              Edit
            </button>
          )}
        <button
          className="bg-red-600 p-2 rounded-xl hover:bg-red-700 transition"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li >
  );
}

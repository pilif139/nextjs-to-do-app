"use client";

import deleteTask from "@/actions/deleteTask";
import { useState } from "react";
import type { Task } from "@prisma/client";
import editTask from "@/actions/editTask";
import useToggleTimeFormat from "@/hooks/useToggleTimeFormat";

type Props = {
  task: Task;
};

export default function Task({ task }: Props) {
  const [time, setTime] = useState(() => {
    if (new Date(task.createdAt).getTime() < new Date(task.updatedAt).getTime()) {
      return new Date(task.updatedAt);
    } else {
      return new Date(task.createdAt);
    }
  });
  const [formattedTime, setIsLocaleTime] = useToggleTimeFormat(time);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [updatedTask, setUpdatedTask] = useState<string>("");

  return (
    <div className="flex items-center justify-between bg-gray-500 text-white font-medium text-xl min-w-[50rem] m-2 rounded-2xl shadow-xl p-3 hover:bg-gray-600 transition">
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
              onClick={() => setIsLocaleTime((prev) => !prev)}
            >
              {formattedTime}
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
                setTime(new Date());
              }}
            >
              Save
            </button>
          ) : (
            <button
              className="bg-green-600 py-2 px-5 rounded-xl font-light hover:font-bold hover:bg-green-700 transition-all mx-3"
              onClick={() => setIsUpdating(true)}
            >
              Edit
            </button>
          )}
        <button
          className="bg-red-600 py-2 px-5 rounded-xl font-light hover:font-bold hover:bg-red-700 transition-all"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

"use client"

import {deleteTask} from "@/actions/action";
import {useState} from "react";

type Props = {
    task: {
        id: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
    }

}

export default function Task({task} : Props){
  const [createdAt, setCreatedAt] = useState<string>(task.createdAt.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}))

    const handleTimeClick = () => {
        if(createdAt === task.createdAt.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})){
            setCreatedAt(task.updatedAt.toLocaleDateString())
        }
        else{
          setCreatedAt(task.createdAt.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}))
        }
    }

  return (
      <li className="flex items-center justify-between bg-gray-500 text-white font-medium text-xl min-w-[50rem] m-2 rounded-2xl shadow-xl p-3 hover:bg-gray-600 transition">
        <div>
          <span>{task.title} - &nbsp;</span>
          <button
              className="text-slate-200 font-light text-md hover:font-bold hover:cursor-pointer"
              onClick={handleTimeClick}>{createdAt}
          </button>
        </div>
        <button className="bg-red-600 p-2 rounded-xl hover:bg-red-700 transition"
                onClick={() => deleteTask(task.id)}>Delete
        </button>
      </li>
  )
}
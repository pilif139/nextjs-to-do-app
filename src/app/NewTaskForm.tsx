"use client";

import addTask from "@/actions/addTask";
import { motion as m } from "framer-motion";

export default function NewTaskForm() {
    return (
        <m.form
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.2 }}
            action={addTask}>
            <input type="text" placeholder="Add task..." className="p-3 rounded-lg focus:outline-none border-2 focus:border-slate-900 focus:bg-slate-100 transition" name="title" />
            <button className="bg-blue-600 text-white p-3 rounded-lg ml-5 mt-5 active:bg-blue-900 hover:bg-blue-900 font-light hover:font-extrabold transition-all" type="submit">Add task</button>
        </m.form>
    )

}
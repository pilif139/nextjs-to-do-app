import addTask from '@/actions/addTask';
import prisma from '@/lib/db';
import Task from "@/app/Task";

export default async function Home() {
  const tasks = await prisma.task.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold">To Do List</h1>

      <ul className="mt-8 flex flex-col justify-center items-center min-w-48">
        {tasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </ul>

      <form action={addTask}>
        <input type="text" placeholder="Add task..." className="p-3 rounded-lg focus:outline-none border-2 focus:border-slate-900 focus:bg-slate-100 transition" name="title" />
        <button className="bg-blue-600 text-white p-3 rounded-lg ml-5 mt-5 active:bg-blue-900 transition" type="submit">Add task</button>
      </form>
    </main>
  );
}

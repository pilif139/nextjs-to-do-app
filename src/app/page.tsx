import prisma from '@/lib/db';
import Task from "@/app/Task";
import NewTaskForm from './NewTaskForm';

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

      <NewTaskForm />
    </main>
  );
}

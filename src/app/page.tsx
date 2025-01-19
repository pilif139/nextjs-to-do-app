import prisma from '@/lib/db';
import Task from "@/app/Task";
import NewTaskForm from './NewTaskForm';
import AnimatedList, { ListElement } from '@/components/AnimatedList';
import Heading from '@/components/Heading';

export default async function Home() {
  const tasks = await prisma.task.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Heading>To Do  List</Heading>

      <ul className="mt-8 flex flex-col justify-center items-center min-w-48">
        <AnimatedList>
          {tasks.map((task, id) => (
            <ListElement id={id} key={id}>
              <Task key={id} task={task} />
            </ListElement>
          ))}
        </AnimatedList>
      </ul>

      <NewTaskForm />
    </main>
  );
}

"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export default async function deleteTask(id: string, task: string) {
  await prisma.task.update({
    where: {
      id: id,
    },
    data: {
      title: task,
    },
  });

  revalidatePath("/");
}

"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export default async function deleteTask(id: string) {
  await prisma.task.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/");
}

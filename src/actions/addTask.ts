"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export default async function addTask(formData: FormData) {
  if (formData.get("title") === "") return;
  await prisma.task.create({
    data: {
      title: formData.get("title") as string,
    },
  });

  revalidatePath("/");
}

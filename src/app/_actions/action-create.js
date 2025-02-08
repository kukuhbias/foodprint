"use server";

import { revalidatePath } from "next/cache";
import { URL } from "../constant/url";

export async function CreateActivityAction(_, formData) {
  const name = formData.get("name");
  const link = formData.get("link");
  const description = formData.get("description");
  const isvegan = Boolean(formData.get("isvegan"));
  const calories = Number(formData.get("calories"));

  await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([
      {
        name,
        description,
        link,
        isvegan,
        calories,
      },
    ]),
  });
  revalidatePath("/");
}

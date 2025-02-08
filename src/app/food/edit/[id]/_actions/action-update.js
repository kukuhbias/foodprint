"use server";

import { URL } from "@/app/constant/url";
import { redirect } from "next/navigation";

export async function UpdateActivityAction(_, formData) {
  const id = formData.get("id");
  const name = formData.get("name");
  const link = formData.get("link");
  const description = formData.get("description");
  const isvegan = Boolean(formData.get("isvegan"));
  const calories = Number(formData.get("calories"));

  console.log(id, name, link, description, isvegan, calories);

  await fetch(URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _id: id,
      name: name,
      description: description,
      link: link,
      isvegan: isvegan,
      calories: calories,
    }),
  });
  redirect("/");
}

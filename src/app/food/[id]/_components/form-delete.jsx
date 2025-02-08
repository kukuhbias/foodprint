import { URL } from "@/app/constant/url";
import { redirect } from "next/navigation";
export const FoodDelete = ({ id }) => {
  async function DeleteFoodAction(formData) {
    "use server";

    const id = formData.get("food_id");

    await fetch(URL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([id]),
    });
    redirect("/");
  }
  return (
    <div>
      <form action={DeleteFoodAction}>
        <input name="food_id" hidden defaultValue={id} />
        <button className="bg-red-500 hover:bg-red-400">Delete</button>
      </form>
    </div>
  );
};

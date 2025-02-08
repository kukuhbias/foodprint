"use client";

import { useActionState } from "react";
import { CreateActivityAction } from "../_actions/action-create";

export const FormCreate = () => {
  const [state, formAction, pending] = useActionState(
    CreateActivityAction,
    null
  );
  return (
    <form className="space-y-2" action={formAction}>
      <section>
        <h3 className="text-lg font-bold">Add Foodhistory</h3>
      </section>
      <input name="name" placeholder="input the name" required></input>
      <input name="link" placeholder="input image link" required />
      <input name="description" placeholder="input the description" required />
      <div className="grid grid-cols-4 items-center">
        <div className="col-span-1 ">
          <label
            htmlFor="isVegan"
            className="flex items-center justify-center text-center space-x-2"
          >
            <div>
              <select name="isvegan">
                <option value={true}>Vegan</option>
                <option value={false}>Non Vegan</option>
              </select>
            </div>
          </label>
        </div>
        <div className="col-span-3">
          <input type="number" name="calories" placeholder="est calories" />
        </div>
      </div>
      <button disabled={pending} className="w-full">
        {pending ? "saving" : "save"}
      </button>
    </form>
  );
};

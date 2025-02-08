"use client";

import { useActionState } from "react";
import { UpdateActivityAction } from "../_actions/action-update";

export const FormUpdate = ({
  id,
  name,
  link,
  description,
  isvegan,
  calories,
}) => {
  const [state, formAction, pending] = useActionState(
    UpdateActivityAction,
    null
  );
  return (
    <form className="space-y-2" action={formAction}>
      <section>
        <h3 className="text-lg font-bold">Update</h3>
      </section>
      <input name="id" defaultValue={id} hidden />
      <input
        name="name"
        placeholder="input the name"
        required
        defaultValue={name}
      />
      <input
        name="link"
        placeholder="input image link"
        required
        defaultValue={link}
      />
      <input
        name="description"
        placeholder="input the description"
        required
        defaultValue={description}
      />
      <div className="grid grid-cols-4 items-center">
        <div className="col-span-1 ">
          <label
            htmlFor="isVegan"
            className="flex items-center justify-center text-center space-x-2"
          >
            <div>
              <select name="isvegan" defaultValue={isvegan}>
                <option value={true}>Vegan</option>
                <option value={false}>Non Vegan</option>
              </select>
            </div>
          </label>
        </div>
        <div className="col-span-3">
          <input
            type="number"
            name="calories"
            placeholder="est calories"
            defaultValue={calories}
          />
        </div>
      </div>
      <button disabled={pending} className="w-full">
        {pending ? "saving" : "save"}
      </button>
    </form>
  );
};

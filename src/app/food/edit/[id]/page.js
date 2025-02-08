import { URL } from "@/app/constant/url";
import { FormUpdate } from "./_components/form_update";

export default async function Page({ params }) {
  const { id } = await params;
  const res = await fetch(`${URL}/${id}`);
  const data = await res.json();

  return (
    <div className="max-w-xl m-auto space-y-4">
      <FormUpdate
        id={data._id}
        name={data.name}
        link={data.link}
        description={data.description}
        isvegan={data.isvegan}
        calories={data.calories}
      />
    </div>
  );
}

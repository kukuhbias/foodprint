import Link from "next/link";
import { FoodDelete } from "./_components/form-delete";
import { URL } from "@/app/constant/url";

export default async function Page({ params }) {
  const { id } = await params;
  const res = await fetch(`${URL}/${id}`);
  const data = await res.json();

  return (
    <div className="relative flex flex-col border shadow-lg max-w-xl p-4 m-auto space-y-4 text-center items-center">
      <Link href={"/"}>
        <div className="absolute flex top-4 right-4 bg-slate-100 w-6 h-6 rounded-full text-slate-500 font-semibold items-center justify-center hover:bg-slate-50">
          x
        </div>
      </Link>
      <h3 className="tracking-tight font-bold w-full">{data.name}</h3>
      <img src={data.link} alt="" className="h-[150px]" />
      <h3>{data.description}</h3>
      <h3>{data.isvegan}</h3>
      <h3>{data.calories} Kcal</h3>
      <div className="flex gap-8">
        <Link href={`edit/${id}`}>
          <button className="bg-green-500 hover:bg-green-400">Edit</button>
        </Link>
        <FoodDelete id={id} />
      </div>
    </div>
  );
}

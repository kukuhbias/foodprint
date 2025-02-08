import Link from "next/link";
import { URL } from "../constant/url";

export const DataList = async () => {
  const res = await fetch(URL);
  const { data } = await res.json();

  return (
    <div className="text-center space-y-4">
      <h3> your food print</h3>
      <div className="grid grid-cols-3 gap-4">
        {data.map((item) => {
          return (
            <div key={item._id} className="border shadow-lg rounded-xl">
              <Link href={`/food/${item._id}`}>
                <div className="h-[150px]">
                  <img src={item.link} alt="" className="h-[150px]" />
                </div>
                <div className="flex flex-col h-[60px] p-2 items-center ">
                  <div className="font-bold tracking-tight ">{item.name}</div>
                  {item.isvegan ? (
                    <div className="flex">
                      <img
                        width={16}
                        height={16}
                        src="../../../vegan.png"
                        alt=""
                      />{" "}
                      <p className="tracking-tigh">egan</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

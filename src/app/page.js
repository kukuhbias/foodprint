import { FormCreate } from "./_components/form-create";
import { DataList } from "./_components/data-list";

export default function Page() {
  return (
    <div className="max-w-xl m-auto space-y-4">
      <FormCreate />
      <DataList />
    </div>
  );
}

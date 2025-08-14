import { Checkbox } from "../../../ui/Controls/Checkbox";

interface categoryprops {
    IsActive:boolean;
    name:string;
}

interface Categoriesprops{
    categories:categoryprops[];
}

export default function Categories({ categories }: Categoriesprops) {
  return (
    <div className="flex flex-col border-b">
      <h1 className="mb-5">Categories:</h1>
      <div className="gap-2">
        {categories.map((prop) => (
          <div key={prop.name} className="flex items-center gap-2">
            <Checkbox
              onChange={(newChecked) => {
                console.log(`${prop.name} changed to:`, newChecked);
              }}
              checked={prop.IsActive}
            />
            <h1>{prop.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

import { PlusIcon } from "@heroicons/react/24/outline";
import { IconButton } from "../../../../../../../ui/button/IconButton";
import DeleteButton from "../../../../../../../ui/table.tsx/Delete";
import EditButton from "../../../../../../../ui/table.tsx/Edit";
import SectionCard from "./SectionCard";
import Variant from "../variantCard";


const variants = [
  { id: 1, name: "Red" },
  { id: 2, name: "Blue" },
  { id: 3, name: "Green" },
];

const sections = [
  { id: 1, name: "Specifications" },
  { id: 2, name: "Materials & Build" },
  { id: 3, name: "Size & Dimensions" },
  { id: 4, name: "Care Instructions" },
  { id: 5, name: "Warranty" },
];


export default function Section(){

    return(
        <div className="flex flex-col border w-2/3">
                            <div className="flex justify-between border-b p-2 items-center">
                                <h2 className="text-sm font-medium">Sub Category Name</h2>
                                <div className="flex gap-1">
                                <EditButton size="sm" />
                                <DeleteButton size="sm" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 p-2">
                                <div className="flex gap-2 items-center">
                                <h2 className="font-semibold text-sm ">Variant ({variants.length}/4)</h2>
                                <IconButton variant="text" isPill={true} icon={<PlusIcon className="w-4 h-4" />}/>
                                </div>
                                <div className="flex items-center gap-2">
                                {variants.map((variant)=>(
                                    <Variant {...variant}/>
                                ))
                                }
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 p-2">
                                <div className="flex gap-2 items-center">
                                <h2 className="font-semibold text-sm ">Sections</h2>
                                <IconButton variant="text" isPill={true} icon={<PlusIcon className="w-4 h-4" />}/>
                                </div>
                                <div className="flex flex-col gap-2">
                                {sections.map((section)=>(
                                    <SectionCard {...section}/>
                                ))
                                }
                                </div>
                            </div>
                        </div>
    )
}
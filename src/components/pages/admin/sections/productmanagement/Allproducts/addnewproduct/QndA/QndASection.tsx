import { PlusIcon } from "@heroicons/react/24/outline";
import { Button } from "../../../../../../../ui/button/Button";
import QndACollapse from "../../../../../../../ui/ReusableCollapse";

const items = [
    {
      key: "1",
      title: "Lorem",
      content: <p>This is content 1</p>,
      onEdit: () => console.log("Edit 1"),
      onDelete: () => console.log("Delete 1"),
    },
    {
      key: "2",
      title: "Lorem",
      content: <p>This is content 2</p>,
      onEdit: () => console.log("Edit 2"),
      onDelete: () => console.log("Delete 2"),
    },
  ];


export default function QndASection(){

    return(
        <div className="flex flex-col justify-start gap-2 w-full">
        <h1 className="text-lg font-semibold mb-3">Questions & Answers</h1>
        <div className="flex justify-start">
        <Button size="sm" isPill={true} icon={<PlusIcon />} label="Add Q&A"/>
        </div>
        <QndACollapse items={items} />
        </div>
    )
}
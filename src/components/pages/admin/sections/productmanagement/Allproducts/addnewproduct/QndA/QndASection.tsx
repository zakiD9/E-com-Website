import { PlusIcon } from "@heroicons/react/24/outline";
import { Button } from "antd";



export default function QndASection(){

    return(
        <div className="flex flex-col justify-start gap-2 w-4/6">
        <h1 className="text-lg font-semibold mb-3">Questions & Answers</h1>
        <div className="flex justify-start">
        <Button size="sm" isPill={true} icon={<PlusIcon />} label="Add Q&A"/>
        </div>
        </div>
    )
}
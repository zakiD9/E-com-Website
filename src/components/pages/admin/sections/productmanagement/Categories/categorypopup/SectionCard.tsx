import { useState } from "react"
import DeleteButton from "../../../../../../ui/table.tsx/Delete";
import EditButton from "../../../../../../ui/table.tsx/Edit";
import { CheckBadgeIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface sectionProps{
    name: string;
    id: number;
}

export default function Section({ name, id }: sectionProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [tempName, setTempName] = useState(name);

    const handleSave = () => {
        setIsEditing(false);
    };

    const handleEdit = () =>{
        console.log("is edit")
        setIsEditing(!isEditing);
    }

    const handleCancel = () => {
        setTempName(name);
        setIsEditing(false);
    };

    return (
        <div key={id} className="flex border-b p-0.5 justify-between items-center">
            {isEditing ? (
                <input
                    className="text-sm border px-1 py-0.5 rounded"
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    autoFocus
                />
            ) : (
                <span className="text-sm">{tempName}</span>
            )}

            <div className="flex gap-2">
                {isEditing ? (
                    <>
                        <button onClick={handleSave} className="text-green-600"><CheckIcon className="w-4 h-4"/></button>
                        <button onClick={handleCancel} className="text-red-600"><XMarkIcon className="w-4 h-4" /></button>
                    </>
                ) : (
                    <>
                            <EditButton size="sm" onClick={handleEdit}/>
                            <DeleteButton size="sm" />
                    </>
                )}
            </div>
        </div>
    );
}

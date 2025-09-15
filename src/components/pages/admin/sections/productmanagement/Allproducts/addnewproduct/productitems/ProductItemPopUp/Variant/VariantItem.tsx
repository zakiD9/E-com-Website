import AddNewVariantPopUp from "./AddNewVariantPopUp";

type VariantItemProps = {
  label: string;
  value: string | number;
};

export default function VariantItem(props:VariantItemProps){

    return(
        <div className="flex mt-1 justify-between">
                            <span className="font-semibold">{props.label}:</span>
                            <span className="mr-52">{props.value}</span>
                            <AddNewVariantPopUp />
                            </div>
    )
}
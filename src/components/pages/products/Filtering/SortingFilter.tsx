import CustomDropdown from "../../../ui/dropdown/Dropdown";



export default function SortingFilter(){

    return(
        <div className="flex gap-2 items-center">
            <span>Sorted By:</span>
            <CustomDropdown />
        </div>
    )
}
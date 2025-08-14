import { SearchBar } from "../../../ui/search/SearchInput";
import SortingFilter from "./SortingFilter";



export default function SearchndFilter(){

    return(
        <div className="flex flex-col gap-2 w-full">
                        <div className="flex w-full justify-between">
                            <SearchBar />
                            <SortingFilter />
                        </div>
                        <div className="flex justify-between w-full bg-cards p-2 rounded-md"> 
                            <div className="flex items-center gap-2">
                            <span>Active Filters:</span>
                            <span>5 Star rating x</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>65,000</span>
                                <span>Results found</span>
                            </div>
                        </div>
                    </div>
    )
}
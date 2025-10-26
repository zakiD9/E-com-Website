interface variantProps{
    id:number;
    name:string;
}


export default function Variant(props:variantProps){

    return(
        <div
           key={props.id}
          className="group relative bg-primary/20 px-2 py-1 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/40"
        >
           <p className="text-sm m-0 leading-none">{props.name}</p>

          <button
            className="absolute -top-1 -right-1 hidden group-hover:flex items-center justify-center bg-white  rounded-full w-4 h-4 text-xs"
          >
            ✕
          </button>
        </div>
    )
}
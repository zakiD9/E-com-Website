import CustomInput from "../components/ui/Input/Input";



export default function Home(){
    return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary">
    <CustomInput
      label="Email"
    />
    </div>
);
}
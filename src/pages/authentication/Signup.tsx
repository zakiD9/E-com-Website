import SignupForm from "../../components/pages/Authentication/SignupForm";



export default function Signup(){

    return(
        <div className="flex">
            <div className="bg-primary min-h-screen w-2/5">
            </div>
            <div className="w-3/5 justify-center items-center flex ">
            <SignupForm />
            </div>
            
        </div>
    )
}
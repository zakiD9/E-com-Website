import LoginForm from "../../components/pages/Authentication/LoginForm";



export default function Login(){

    return(
        <div className="flex">
                    <div className="bg-primary min-h-screen w-2/5">
                    </div>
                    <div className="w-3/5 justify-center items-center flex ">
                    <LoginForm />
                    </div>
                    
                </div>
    )
}
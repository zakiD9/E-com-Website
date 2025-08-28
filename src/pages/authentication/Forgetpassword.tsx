import ForgetPasswordForm from "../../components/pages/Authentication/ForgetPasswordForm";




export default function ForgetPassword(){

    return(
        <div className="flex">
                    <div className="bg-primary min-h-screen w-2/5">
                    </div>
                    <div className="w-3/5 justify-center items-center flex ">
                    <ForgetPasswordForm />
                    </div>
                    
                </div>
    )
}
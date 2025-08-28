import ResetPasswordForm from "../../components/pages/Authentication/ResetPasswordForm";




export default function ResetPassword(){

    return(
        <div className="flex">
                    <div className="bg-primary min-h-screen w-2/5">
                    </div>
                    <div className="w-3/5 justify-center items-center flex ">
                    <ResetPasswordForm />
                    </div>
                    
                </div>
    )
}
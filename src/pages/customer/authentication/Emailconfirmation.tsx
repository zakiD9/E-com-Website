import EmailConfirmationForm from "../../../components/pages/customer/Authentication/EmailConfirmationForm";




export default function EmailConfirmation(){

    return(
        <div className="flex">
                    <div className="bg-primary min-h-screen w-2/5">
                    </div>
                    <div className="w-3/5 justify-center items-center flex ">
                    <EmailConfirmationForm />
                    </div>
                    
                </div>
    )
}
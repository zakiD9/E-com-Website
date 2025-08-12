import { Button } from "../../ui/button/Button";
import CustomInput from "../../ui/Input/Input";




export default function SubsecriptionToNewsletter(){

    return(
         <div className="bg-gray-400 text-center py-12 px-4">
      <h2 className="text-2xl font-bold text-white mb-2">
        Subscribe to our newsletter
      </h2>
      <p className="text-white/90 max-w-xl mx-auto mb-6">
        Subscribe for early alerts, seasonal deals, surprise rewards, exclusive perks,
        and insider updates—never miss what matters most.
      </p>

      <div className="flex justify-center gap-2 max-w-md mx-auto">
        <div className="flex-1">
          <CustomInput
            placeholder="Enter your email"
            size="large"
            label=""
          />
        </div>
        <Button
          label="Subscribe"
          variant="primary"
        />
      </div>
    </div>
    )
}
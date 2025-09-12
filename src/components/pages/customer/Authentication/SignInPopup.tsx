import React, { useState } from "react";
import { Divider, Modal, } from "antd";
import CustomInput from "../../../ui/Input/Input";
import { ArrowRightIcon, EyeIcon } from "@heroicons/react/24/outline";
import { Button } from "../../../ui/button/Button";
import { useUserStore } from "../../../../store/userstore";

interface SignInModalProps {
  open: boolean;
  onClose: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ open, onClose }) => {
  const [email,setEmail]=useState<string>("");
  const [password,setPassword]=useState<string>("");
  const {login ,loading ,error}=useUserStore();

  const handleSubmit = async (e:React.FormEvent)=>{
    e.preventDefault();
    await login(email, password);
};

  return (
    <Modal
      title={<span className="text-lg text-center font-semibold">Sign In to your account</span>}
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      className="w-3/12"
    >
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-1">
        <CustomInput value={email} onChange={(e)=>{setEmail(e.target.value)}} size="large" label="Email Address"/>
        <CustomInput type="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}} size="large" label="Password" icon={<EyeIcon className="w-4 h-4"/>} />
        <div className="flex justify-end">
        <p className="text-xs">Forget Password</p>
        </div>
        <span className="text-red-500 text-center text-sm">{error ? error : "" }</span>
        <Button variant="primary" label={loading ? "signing in.." : "Sign In"} icon={<ArrowRightIcon />} iconPosition="right"/>
        <Divider className="m-0" plain>Or</Divider>
        <Button  label="Sign Up" />
      </form>
    </Modal>
  );
};

export default SignInModal;

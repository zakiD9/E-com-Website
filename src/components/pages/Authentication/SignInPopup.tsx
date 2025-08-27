import React from "react";
import { Divider, Modal, } from "antd";
import CustomInput from "../../ui/Input/Input";
import { ArrowRightIcon, EyeIcon } from "@heroicons/react/24/outline";
import { Button } from "../../ui/button/Button";

interface SignInModalProps {
  open: boolean;
  onClose: () => void;
  onSignIn: (values: { email: string; password: string }) => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ open, onClose }) => {

  return (
    <Modal
      title={<span className="text-lg text-center font-semibold">Sign In to your account</span>}
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      className="w-3/12"
    >
      <div className="flex flex-col w-full gap-1">
        <CustomInput size="large" label="Email Address"/>
        <CustomInput size="large" label="Password" icon={<EyeIcon className="w-4 h-4"/>} />
        <div className="flex justify-end">
        <p className="text-xs">Forget Password</p>
        </div>
        <Button variant="primary" label="Sign In" icon={<ArrowRightIcon />} iconPosition="right"/>
        <Divider className="m-0" plain>Or</Divider>
        <Button  label="Sign Up" />
      </div>
    </Modal>
  );
};

export default SignInModal;

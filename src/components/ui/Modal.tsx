import { Modal, Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";

interface CustomModalProps {
  visible: boolean;
  title?: any;
  content?: React.ReactNode;
  onClose: () => void;
  onConfirm?: () => void;
  className:string;
  confirmText?: string;
  cancelText?: string;
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  title = "Modal Title",
  content = "This is the modal content.",
  onClose,
  onConfirm,
  className="rounded-xl w-[1042px] h-[716px]",
  confirmText = "Confirm",
  cancelText = "Cancel",
}) => {
  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      centered
      className={className}
      styles={{ body: { padding: "1rem" } }}
    >
      <div className="flex flex-col gap-4">
        {title && <h2 className="text-3xl text-center pb-5 border-b font-semibold">{title}</h2>}
        <div className="text-gray-700">{content}</div>
        <div className="flex justify-end gap-2 mt-4">
          <Button
            type="default"
            onClick={onClose}
            shape="round"
          >
            {cancelText}
          </Button>
          {onConfirm && (
            <Button
              type="default"
              onClick={onConfirm}
              shape="round"
            >
              {confirmText}{<CheckOutlined />}
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;

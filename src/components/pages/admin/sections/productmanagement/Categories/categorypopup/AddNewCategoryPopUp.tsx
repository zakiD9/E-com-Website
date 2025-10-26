import { useRef, useState } from "react";
import CustomModal from "../../../../../../ui/Modal";
import CustomInput from "../../../../../../ui/Input/Input";
import { TextButton } from "../../../../../../ui/button/TextButton";
import CustomTextArea from "../../../../../../ui/TextArea";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useCategoryStore } from "../../../../../../../store/categoryStore";
import AlertMessage from "../../../../../../ui/alertMessage";

export default function NewCategoryPopUp() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const { addNewCategory, loading, error } = useCategoryStore();

  const handleConfirm = async () => {
    if (!name || !image) {
      setIsError(true);
      setAlertMessage("Please fill in all fields.");
      setAlertVisible(true);
      return;
    }

    try {
      await addNewCategory(name, image, "");
      setIsError(false);
      setAlertMessage("Category added successfully!");
      setAlertVisible(true);
      setIsOpen(false);
    } catch (err) {
      console.error(err);
      setIsError(true);
      setAlertMessage("Failed to add category. Please try again.");
      setAlertVisible(true);
    }
  };

  return (
    <>
      <div>
        <button
          onClick={() => setIsOpen(true)}
          className="h-full flex justify-center items-center w-full hover:shadow-xl duration-300 ease-in-out cursor-pointer bg-gray-300 rounded-lg"
        >
          <PlusIcon className="w-8 h-8" />
        </button>

        <CustomModal
          visible={isOpen}
          className="w-3/5"
          title={<div className="text-2xl flex"><span>New Category</span></div>}
          content={
            <div className="flex gap-4">
              <div className="flex flex-col w-1/5 gap-2 items-center">
                {image ? (
                  <div className="relative">
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Preview"
                      className="h-[150px] w-[150px] object-cover rounded-lg border"
                    />
                    <button
                      onClick={() => setImage(null)}
                      className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1 rounded"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <div className="h-[150px] w-[150px] border border-dashed border-gray-400 flex items-center justify-center text-sm text-gray-500 rounded-lg">
                    No image selected
                  </div>
                )}

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files?.[0] || null)}
                    className="hidden"
                    ref={fileInputRef}
                  />

                  <TextButton
                    label="Upload Image"
                    onClick={() => fileInputRef.current?.click()}
                  />
              </div>

              <div className="flex flex-col w-4/5 items-center gap-2">
                <div className="flex flex-col w-3/4">
                  <CustomInput
                    placeholder="type name..."
                    onChange={(e) => setName(e.target.value)}
                    label="Name"
                  />
                </div>
                <CustomTextArea
                  label="Description"
                  placeholder="type description..."
                  buttonText={description}
                  onChange={(value) => setDescription(value)}
                />
              </div>
            </div>
          }
          onClose={() => setIsOpen(false)}
          onConfirm={handleConfirm}
          confirmText={loading ? "Adding..." : "Confirm"}
        />
      </div>

      <AlertMessage
        message={alertMessage}
        type={isError ? "error" : "success"}
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
      />
    </>
  );
}

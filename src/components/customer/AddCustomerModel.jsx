import { Modal } from "../ui/Modal";
import FileInput from "../form/input/FileInput";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Button from "../ui/button/Button";

const AddCustomerModal = ({ isOpen, onClose, onChange, onFileChange }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-[600px] m-4">
      <div className="p-6 bg-white rounded-3xl dark:bg-gray-900">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white/90 mb-4">Add Customer</h2>
        <form className="space-y-5">
          <div>
            <Label>Image</Label>
            <FileInput onChange={onFileChange} className="custom-class" />
          </div>  
          <div>
            <Label>Full Name</Label>
            <Input
              type="text"
              onChange={(e) => onChange("name", e.target.value)}
            />
          </div>
          <div>
            <Label>E-mail</Label>
            <Input
              type="email"
              onChange={(e) => onChange("email", e.target.value)}
            />
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input
              type="text"
              onChange={(e) => onChange("phone", e.target.value)}
            />
          </div>

          <div className="flex items-center justify-center gap-3 pt-4">
            <Button className="px-4 py-3 w-[250px] h-[50px] text-[20px]">
              Add Customer
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddCustomerModal;

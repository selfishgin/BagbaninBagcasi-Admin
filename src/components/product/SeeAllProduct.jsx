import { useEffect, useState } from "react";
import Label from "../form/Label";
import FileInput from "../form/input/FileInput";
import { Modal } from "../ui/Modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";

const SeeAllCustomer = ({ isOpen, onClose, customer,showDeleteButton = true }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email:"",
    phone:"",
    image: null,
  });
  const [originalData, setOriginalData] = useState({});
  const [formChanged, setFormChanged] = useState(false);

  useEffect(() => {
    if (customer) {
      const data = {
        fullName: customer.fullName || "Null Data",
        email: customer.email || "Null Data",
        phone: customer.phone || "Null Data",
        image: customer.image,
      };
      setFormData(data);
      setOriginalData(data);
      setFormChanged(false);
    }
  }, [customer]);

  const handleChange = (field, value) => {
    const updated = {
      ...formData,
      [field]: value,
    };
    setFormData(updated);
    setFormChanged(
      updated.fullName !== originalData.fullName || updated.image !== originalData.image
    );
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0] || null;
    handleChange("image", file);
  };

  const handleSave = () => {
    console.log("Saving updated data:", formData);
    // Save API call burada ola bilər
    setFormChanged(false);
    onClose();
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      console.log("Deleting:", customer);
      onClose(); 
    }
  };

  if (!customer) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} showCloseButton={{showDelete:showDeleteButton,onDelete:handleDelete}} className="max-w-[500px] m-4">
      <div className="p-6 bg-white rounded-3xl dark:bg-gray-900">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white/90 mb-4">
            Customer Details
            </h2>
        </div>

        <form className="space-y-5">
          <div>
            <Label>Image</Label>
            <FileInput onChange={handleFileChange} />
          </div>
          <div>
            <Label>Full Name</Label>
            <Input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
            />
          </div>
          <div>
            <Label>E-Mail</Label>
            <Input
              type="text"
              value={formData.email}
              onChange={(e) => handleChange("fullName", e.target.value)}
            />
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input
              type="text"
              value={formData.phone}
              onChange={(e) => handleChange("fullName", e.target.value)}
            />
          </div>          
        </form>

        <div className="flex justify-center items-center pt-6">
          <Button
            onClick={handleSave}
            disabled={!formChanged}
            className="px-4 py-2 text-white"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SeeAllCustomer;

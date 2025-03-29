import React, { useState } from "react";
import PageBreadcrumb from "../components/common/PageBreadCrumb";
import PageMeta from "../components/common/PageMeta";
import { useModal } from "../hooks/useModal";
import { Modal } from "../components/ui/Modal";
import Button from "../components/ui/button/Button";
import Input from "../components/form/input/InputField";
import Label from "../components/form/Label";

const Sellers = () => {
  const initialSellers = [
    {
      id: 1,
      name: "Amanda Lee",
      email: "amanda@example.com",
      phone: "+1 234 567 890",
      location: "New York, USA",
      image: "/images/user/user-02.jpg",
      rating: 4.8,
    },
    {
      id: 2,
      name: "John Smith",
      email: "john@example.com",
      phone: "+1 987 654 321",
      location: "Los Angeles, USA",
      image: "/images/user/user-03.jpg",
      rating: 4.6,
    },
    {
      id: 3,
      name: "Luna Park",
      email: "luna@example.com",
      phone: "+1 555 123 456",
      location: "Chicago, USA",
      image: "/images/user/user-04.jpg",
      rating: 4.9,
    },
  ];

  const [sellers, setSellers] = useState(initialSellers);
  const { isOpen, openModal, closeModal } = useModal();
  const [selectedSeller, setSelectedSeller] = useState(null);

  const handleEdit = (seller) => {
    setSelectedSeller(seller);
    openModal();
  };

  const handleSave = () => {
    setSellers((prevSellers) =>
      prevSellers.map((seller) =>
        seller.id === selectedSeller.id ? selectedSeller : seller
      )
    );
    closeModal();
  };
  

  const handleChange = (field, value) => {
    setSelectedSeller((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <PageMeta title="Sellers | Admin Panel" description="Manage all sellers." />
      <PageBreadcrumb pageTitle="Sellers" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {sellers.map((seller) => (
          <div
            key={seller.id}
            className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]"
          >
            <div className="flex items-center gap-4">
              <img
                src={seller.image}
                alt={seller.name}
                className="h-16 w-16 rounded-full border border-gray-200 dark:border-gray-800"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                  {seller.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {seller.location}
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <p className="text-gray-500 dark:text-gray-400">
                📧{" "}
                <span className="font-medium text-gray-800 dark:text-white/90">
                  {seller.email}
                </span>
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                📞{" "}
                <span className="font-medium text-gray-800 dark:text-white/90">
                  {seller.phone}
                </span>
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                ⭐ Rating:{" "}
                <span className="font-medium text-gray-800 dark:text-white/90">
                  {seller.rating}
                </span>
              </p>
            </div>

            <div className="mt-4">
              <Button size="sm" variant="outline" onClick={() => handleEdit(seller)}>
                Edit
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[600px] m-4">
        {selectedSeller && (
          <div className="p-6 bg-white rounded-3xl dark:bg-gray-900">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white/90 mb-4">
              Edit Seller
            </h2>

            <form className="space-y-5">
              <div>
                <Label>Name</Label>
                <Input
                  type="text"
                  value={selectedSeller.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  value={selectedSeller.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
              <div>
                <Label>Phone</Label>
                <Input
                  type="text"
                  value={selectedSeller.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </div>
              <div>
                <Label>Location</Label>
                <Input
                  type="text"
                  value={selectedSeller.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                />
              </div>
              <div>
                <Label>Rating</Label>
                <Input
                  type="number"
                  step="0.1"
                  min="0"
                  max="5"
                  value={selectedSeller.rating}
                  onChange={(e) => handleChange("rating", e.target.value)}
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <Button size="sm" variant="outline" onClick={closeModal}>
                  Cancel
                </Button>
                <Button size="sm" onClick={handleSave}>
                  Save Changes
                </Button>
              </div>
            </form>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Sellers;

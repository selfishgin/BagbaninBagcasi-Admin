import { useState } from "react";
import CustomerBar from "../components/customer/CustomerBar";
import CustomerTable from "../components/customer/CustomerTable";
import UserIcon from "../icons/user-circle.svg";

const initialData = [
  {
    id: 1,
    customer: {
      image: UserIcon,
      fullName: "Aybeniz Memmedova",
      email:"aybeniz@gmail.com",
      phone: "+994 50 123 45 67"
    },
  },
  {
    id: 2,
    customer: {
      image: UserIcon,
      fullName: "Magaza Daxili",
      email:"bagbaninbagcasi@info.com",
      phone: "+994 70 585 78 55"
    },
  },
  {
    id: 3,
    customer: {
      image: UserIcon,
      fullName: "Ibrahim Mirzeyev",
      email:"ibrahim@mail.ru",
      phone: "+994 10 100 10 10"
    },
  },
  {
    id: 4,
    customer: {
      image: UserIcon,
      fullName: "Ahmad Huseynli",
      email:"ahmad@gmail.com",
      phone: "+994 55 500 45 55"      
    },
  },
  {
    id: 5,
    customer: {
      image: UserIcon,
      fullName: "Orxan Huseynov",
      email:"orxantt044@mail.ru",
      phone: "+994 50 573 81 47"      
    },
  },
];

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (order) => {
    setSortOrder(order);
  };

  const filteredData = () => {
    let data = [...initialData];

    if (searchTerm) {
      data = data.filter((item) =>
        item.customer.fullName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOrder === "asc") {
      data.sort((a, b) =>
        a.customer.fullName.localeCompare(b.customer.fullName)
      );
    } else if (sortOrder === "desc") {
      data.sort((a, b) =>
        b.customer.fullName.localeCompare(a.customer.fullName)
      );
    }

    return data;
  };

  return (
    <div className="space-y-8 p-4">
      <CustomerBar
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
      />
      <CustomerTable tableData={filteredData()} />
    </div>
  );
};

export default Customers;

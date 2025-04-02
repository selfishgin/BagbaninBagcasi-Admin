import { useState } from "react";
import ProductBar from "../components/product/ProductBar";
import ProductTable from "../components/product/ProductTable";

const initialData = [
  {
    id: 1,
    Product: {
      fullName: "Aybeniz Memmedova",
      email:"aybeniz@gmail.com",
      phone: "+994 50 123 45 67"
    },
  },
  {
    id: 2,
    Product: {
      fullName: "Magaza Daxili",
      email:"bagbaninbagcasi@info.com",
      phone: "+994 70 585 78 55"
    },
  },
  {
    id: 3,
    Product: {
      fullName: "Ibrahim Mirzeyev",
      email:"ibrahim@mail.ru",
      phone: "+994 10 100 10 10"
    },
  },
  {
    id: 4,
    Product: {
      fullName: "Ahmad Huseynli",
      email:"ahmad@gmail.com",
      phone: "+994 55 500 45 55"      
    },
  },
  {
    id: 5,
    Product: {
      fullName: "Orxan Huseynov",
      email:"orxantt044@mail.ru",
      phone: "+994 50 573 81 47"      
    },
  },
];

const Products = () => {
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
        item.Product.fullName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOrder === "asc") {
      data.sort((a, b) =>
        a.Product.fullName.localeCompare(b.Product.fullName)
      );
    } else if (sortOrder === "desc") {
      data.sort((a, b) =>
        b.Product.fullName.localeCompare(a.Product.fullName)
      );
    }

    return data;
  };

  return (
    <div className="space-y-8 p-4">
      <ProductBar
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
      />
      <ProductTable tableData={filteredData()} />
    </div>
  );
};

export default Products;

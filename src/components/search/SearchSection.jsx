import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import SearchResult from "./SearchResult";
import { getAllProducts } from "../../api/FetchAPI";

export default function SearchSection() {
  const [searchTerm, setSearchTerm] = useState(""); // حالة النص في شريط البحث
  const [products, setProducts] = useState([]); // حالة المنتجات من السيرفر
  const [filteredProducts, setFilteredProducts] = useState([]); // المنتجات المفلترة

  // جلب المنتجات من JSON Server
  const { data, isLoading, isError } = getAllProducts();
  const ProductsData = data?.data || [];
  console.log("All Products: ", ProductsData);

  // تحديث قائمة المنتجات عند تحميلها
  useEffect(() => {
    if (ProductsData.length) {
      setProducts(ProductsData); 
    }
  }, [ProductsData]);

  // تصفية المنتجات حسب النص المُدخل (تظهر فقط المنتجات التي تبدأ بالحرف المدخل)
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts([]); // لا تعرض أي نتائج عند المسح
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
      console.log("Filtered Products: ", filtered); // تحقق من الفلترة
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  return (
    <div className="search">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // تتبع النص
        />
        <CiSearch />
      </div>
      {/* عرض النتائج فقط عند وجود نص */}
      {searchTerm && (
        <div className="search_input_result">
          <SearchResult results={filteredProducts} />
        </div>
      )}
    </div>
  );
}

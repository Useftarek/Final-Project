import { useState, useEffect } from "react";
import ClothingItems from "../../components/ClothingItem/ClothingItems";
import FilterMenu from "../../components/Fliteration/FilterMenu";
import { FiFilter } from "react-icons/fi";


const Category = () => {
  const [clothingData, setClothingData] = useState([]); // لتخزين البيانات القادمة من API
  const [filteredItems, setFilteredItems] = useState([]); // العناصر بعد التصفية
  const [filters, setFilters] = useState({ price: 0, color: '', size: '', sale: '' });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
 

  // جلب البيانات من API


  // تطبيق الفلاتر على البيانات
  useEffect(() => {
    const items = clothingData.filter((item) => {
      return (
        (filters.color ? item.color === filters.color : true) &&
        (filters.sale ? item.sale === filters.sale : true) &&
        (filters.size ? item.size === filters.size : true) &&
        (item.price.replace('$', '') <= filters.price || filters.price === 0)
      );
    });

    setFilteredItems(items);
  }, [filters, clothingData]);

  // تحديث الفلاتر
  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
  };

  return (
    <div className="category">
      <div className="category-container">
        <button
          className="filter-toggle-btn"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <FiFilter size={25} />
        </button>

        <div className={`filter-menu ${isFilterOpen ? 'open' : ''}`}>
          <FilterMenu onFilterChange={handleFilterChange} />
        </div>

        <ClothingItems items={filteredItems} />
      </div>
    </div>
  );
};

export default Category;

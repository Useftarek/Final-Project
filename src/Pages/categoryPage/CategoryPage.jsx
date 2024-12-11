import { useState, useEffect } from "react";
import ClothingItems from "../../components/ClothingItem/ClothingItems";

export default function Category() {
  const [clothingData, setClothingData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filters, setFilters] = useState({
    price: 0,
    color: "",
    size: "",
    sale: "",
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const items = clothingData.filter((item) => {
      return (
        (filters.color ? item.color === filters.color : true) &&
        (filters.sale ? item.sale === filters.sale : true) &&
        (filters.size ? item.size === filters.size : true) &&
        (item.price.replace("$", "") <= filters.price || filters.price === 0)
      );
    });

    setFilteredItems(items);
  }, [filters, clothingData]);

 

  return (
    <div className="category">
      <div className="category-container">
        

        <ClothingItems items={filteredItems} />
      </div>
    </div>
  );
}

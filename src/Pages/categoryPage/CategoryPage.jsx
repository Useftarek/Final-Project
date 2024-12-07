

import { useState } from "react";
import ClothingItems from "../../components/ClothingItem/ClothingItems";
import FilterMenu from "../../components/Fliteration/FilterMenu";
import { FiFilter } from "react-icons/fi";

const Category = () => {
  const [filters, setFilters] = useState({ price: 0, color: '', size: '' , sale: '' });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const clothingData = [
    { id: 1, name: 'Red Shirt', price: '$25', discount: '$20', sale: "-30%", rating: 4, color: 'red', size: 'small', image: 'https://s3-alpha-sig.figma.com/img/6115/920b/12942762aefb7c7ac954e78b76284504?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T5GxOMfRyS6z1bqTcmddFhcidCfsKkJsrhVqrCyVgMNrkY4g~4n8lPMDvX~E4AiVz7d-D0gNpQpnhmLmIf-ujX~cASErPRUvpwsarOhOlkWxTEr8578e2qe8e50NgfmTgHYThoOqkTb6Y4wPUQEIeN9IFWkhGk5GGiCmB0Y1X5feSNrDjGnT~JlSEYn6-W6bKo7D5D5srSjKgJ1lrSLQmg-SABU~~yvPSAVGDVD7mWMpy9tNRynT9Ug5w2dRm1D3aYt44mKkrImBqaKqKCVG9tNueGibDsWeBSHfUdg-GoybHp~O8LhkH2ZMYVZWfNje7-ioLm9U2stMFkLzZ-XHvQ__' },
    { id: 2, name: 'Black Jeans', price: '$50', discount: '$55', sale: "-20%", rating: 5, color: 'blue', size: 'large', image: 'https://s3-alpha-sig.figma.com/img/aecd/8196/485b30fd30b3226e09bb8f8e494c260b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p3mgUJ~1Lxqrja3n2MmwKyqM7sZVuJZ~u4nYU7mtdRVa-3HmW4HJXYyybHLvgmjKrZ5JZersGy3wEv6CiyHl8Jdkx4W8Sj~7RbjJ5qPUIwE7NR~eIS3AqNz9o1ePsZhOTauBKLZFRq7Zk3hBW1t3S6JQN7M~eUx1M~KsWNQLwHg1Ss0LUUl2gDe9Pe~Tlo6qfGzUAKVldC0JNVn06oGE65zVhUrUVzf1if~b8bsjTIWMHzaiohi19mBuOpLOhLj5Pk0gPA9N7tXv5a7e8nKQSzOCUe4s-ZJtxN2bDr0jCI8v10kq5-bi~6kFzh5H6iaqydgTjF-ZrjX3RpAjJkVwnA__' },
    { id: 3, name: 'Yellow Jeans', price: '$60', discount: '$765', rating: 4, sale: "-50%", color: 'blue', size: 'large', image: 'https://s3-alpha-sig.figma.com/img/f04a/017d/b094f9a20c2328f54a31b153619784f3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ct80QzNQ1MzCPHlixXKhvBhOPwctn8b9wfR7cce5Psb2XVbYMzGjwb5hWRBJQdPZyUgYZGrukJKEsOiG7dYNHOFd-Ll5nyi5tl-avnnxZZlWNGV005KJKaWvEbSFfaNa0D5I5Zon7zMH-A5hOLHTdilYDsxKYFg4uJYJtfZwSQ5lfS~LJTaT93Kz18QD4L~Q~RUVjs89gULie5Xll4tnu5hhknJmSorJBZzX6GxslzeZkNoTq5jrKiYaxvTmaJ9K-PMUXVhZ06YZ4andy4ILaJ2wCCXJAz7htL8NjUFdiKhuxMUGa~p-Eo01YxEhort7Js6~olpO3fAwzt9tgjRTwQ__' },
    { id: 4, name: 'Green Jeans', price: '$80', discount: '$125', rating: 3, color: 'blue', size: 'large', image: 'https://s3-alpha-sig.figma.com/img/5723/4b01/d5fcac5632cf6823570ca2d1d53d7d73?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bwR4gh8D83QXi6ZzAkF2YVQ-n435y3KGaKFyff9L2Sr2DjVX4hhIzZN4Y3VykG~IiWp4LYa373OBVvCMytGAbH0OUOcxmTDLHCo0P9beNgql3enDk6lBqQC6iJGzqdMbLUXwB73vbygRAiXRB-PDBfiH3Vi3H1BX8Q~6hYVPpfGTphdDCu4Uqg7lJXaWFKVwY5IES-q-yEqyrAQzrTDBLujlG5f-mailP5pNFW2prDEYa5FuYMwyj95LWT2d7miQqZke1YHIWYNr1~AlhGyaNd3HFY~yOOV3bIiQIlt9j-IA07gfewa8ZRwR9W4~gPKFIqGt3~AZtOSHrFluXGb2jg__' },
    { id: 5, name: 'Orange Jeans', price: '$100', discount: '$35', rating: 2, color: 'blue', size: 'large', image: 'https://s3-alpha-sig.figma.com/img/8951/5d71/4a66d9ca1401101dee4cc689f8bb5ad2?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JnWxEn69lpPqPLtsnvqf02llzD0IXeXUlrCUE1x9DiOyi8hXsIzIVrZCAF3R8zKjAQYl54Wm65vV9q50keDbVD-m5cHhXS67LrBGvjBpVgbu6Ylm6GtOVuPGjWmBRGCX6PsLLk84lNYdNr1pMfAu~K6ANvTrNUpWNUhaA51hztxYIFFaVvgleQPv4Wd3vTcOCMObLqlI1gcV8WG0F-mEyXkr1gGOmS6lBrWcg~uUSkf1v0UlnsuFjS~7dWixQCJMrinzgJ~9WXrM-pybaVVhR-PeFgUYA3rm4KAeBpRLygzBGpbDkDWf1mx-TdRGUTVcr8BcvYx1EWg8kfVFh0njEg__' },
    { id: 6, name: 'Blue Jeans', price: '$120', discount: '$115', rating: 1, color: 'blue', size: 'large', image: 'https://s3-alpha-sig.figma.com/img/e01f/5d3c/d9029bd465a4c7158689ab1619693014?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qljtcc2JMLK11BBt308GHoZc5kCxsjEmriwBcE9j2rAU3Q9J6OxG93y6LS8XnIcq7NoU~RCAqGWzseLigTVOju~AXtVghrP6e95nOxsNw4Gog~kjs~NJ6QW3Z63PLdtegymmbVRaMnb~VRj870MPetrb1i18C5eX8-PXcDiyYG7NdDCTj4oKSx1eO8FCtazhDL-JAkYdUP9PGYTVixbQRP4bYqnuNDKqHiuWx7Y5HnvS83J66LbjjQpD17xwhPvM3-b1mkDUlMqGu6BVLqwlLkMxARBOj4etJPKBRUxeOCdFKb-0AVn-ElsMmhkYtgfAMwCkKD8x~XEiMNoqua082Q__' },

  ];

  const filteredItems = clothingData.filter((item) => {
    return (
      (filters.color ? item.color === filters.color : true) &&
      (filters.sale ? item.sale === filters.sale : true) &&
      (filters.size ? item.size === filters.size : true) &&
      (item.price.replace('$', '') <= filters.price || filters.price === 0)
      
    );
  });

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

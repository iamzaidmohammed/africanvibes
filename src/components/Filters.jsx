import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Filters = ({ CategorySelected }) => {
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isColourOpen, setIsColourOpen] = useState(true);
  const [isSizeOpen, setIsSizeOpen] = useState(true);
  const [isProductTagsOpen, setIsProductTagsOpen] = useState(true);

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("/api/routes/categories.php")
      .then((res) => res.json())
      .then((data) => setCategories(() => data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    CategorySelected(selectedCategory);
  }, [CategorySelected, selectedCategory]);

  const onCategorySelect = (event) => {
    const categoryId = event.target.id;
    const categoryName = event.target.getAttribute("data-name");
    if (event.target.checked) {
      setSelectedCategory(() => [categoryId, categoryName]);
    } else {
      setSelectedCategory(null);
    }
  };

  return (
    <aside className="py-4 w-full md:w-1/4">
      <div className="flex items-center gap-5 mb-4">
        <h2 className="text-xl font-bold">Filters</h2>
        <p>Clear all</p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Categories</h3>

        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <input
                className="cursor-pointer"
                type="checkbox"
                id={category.id}
                data-name={category.name}
                onChange={onCategorySelect}
              />{" "}
              <label
                htmlFor={category.id}
                className="cursor-pointer"
                onClick={onCategorySelect}
              >
                {category.name}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h3
          className="font-semibold cursor-pointer flex justify-between items-center"
          onClick={() => setIsPriceOpen(!isPriceOpen)}
        >
          Price
          <span>{isPriceOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
        </h3>
        {isPriceOpen && (
          <ul>
            <li>
              <input type="checkbox" id="price1" />{" "}
              <label htmlFor="price1">$1000 to $2000</label>
            </li>
            <li>
              <input type="checkbox" id="price2" />{" "}
              <label htmlFor="price2">$2000 to $3000</label>
            </li>
          </ul>
        )}
      </div>

      <div className="mb-4">
        <h3
          className="font-semibold cursor-pointer flex justify-between items-center"
          onClick={() => setIsColourOpen(!isColourOpen)}
        >
          Colour
          <span>{isColourOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
        </h3>
        {isColourOpen && (
          <ul>
            <li>
              <input type="checkbox" id="black" />{" "}
              <label htmlFor="black">Black</label>
            </li>
            <li>
              <input type="checkbox" id="red" />{" "}
              <label htmlFor="red">Red</label>
            </li>
          </ul>
        )}
      </div>

      <div className="mb-4">
        <h3
          className="font-semibold cursor-pointer flex justify-between items-center"
          onClick={() => setIsSizeOpen(!isSizeOpen)}
        >
          Size
          <span>{isSizeOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
        </h3>
        {isSizeOpen && (
          <ul>
            <li>
              <input type="checkbox" id="s" /> <label htmlFor="s">S</label>
            </li>
            <li>
              <input type="checkbox" id="m" /> <label htmlFor="m">M</label>
            </li>
            <li>
              <input type="checkbox" id="l" /> <label htmlFor="l">L</label>
            </li>
            <li>
              <input type="checkbox" id="xl" /> <label htmlFor="xl">XL</label>
            </li>
            <li>
              <input type="checkbox" id="xxl" />{" "}
              <label htmlFor="xxl">XXL</label>
            </li>
          </ul>
        )}
      </div>

      <div className="mb-4">
        <h3
          className="font-semibold cursor-pointer flex justify-between items-center"
          onClick={() => setIsProductTagsOpen(!isProductTagsOpen)}
        >
          Product tags
          <span>{isProductTagsOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
        </h3>
        {isProductTagsOpen && (
          <ul>
            <li>
              <input type="checkbox" id="sale" />{" "}
              <label htmlFor="sale">Sale</label>
            </li>
            <li>
              <input type="checkbox" id="new" />{" "}
              <label htmlFor="new">New</label>
            </li>
          </ul>
        )}
      </div>
    </aside>
  );
};

Filters.propTypes = {
  CategorySelected: PropTypes.func.isRequired,
};

export default Filters;
